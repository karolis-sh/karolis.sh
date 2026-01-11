---
title: Optimistic UI in Practice
date: '2020-05-20'
description: A quick how-to on making your React app interactions feel faster today without a full re-write.
banner: ./images/banner.jpg
---

I think we can all agree that web performance is important. In most cases, you will just measure the load times ([First Contentful Paint (FCP)](https://web.dev/first-contentful-paint/), [Time to Interactive (TTI)](https://web.dev/interactive/), etc.) and get your conclusions from there, but that's not the full user experience. Responsiveness of the app, after it has loaded, is also as important.

After you've taken all the well-defined measures (small bundle size, modern file formats, cache headers etc.) to make things fast, what else can be done? As we aren't machines (yet), it is actually how we [perceive the performance](https://en.wikipedia.org/wiki/Perceived_performance) that matters. Thus, we can trick our brains into thinking things are faster than they actually are.

**Optimistic UI** pattern is one of the tools to improve perceived performance. It helps you bridge the gap between predictable state changes that take time to execute (e.g., slow API requests). It's a powerful technique that has an immediate effect on the user's experience.

## The Practice

Recently, we were building an app with, as usual, a pretty strict time-frame. We got it working fairly reliably and even load fast, but UI interactions after initial load were sluggish. It was because most of the state updates had to be saved via API calls immediately, this resulted in many spinners. Majority of the API actions very rather simple and the outcome was predictable. Thus, the Optimistic UI pattern was a good fit to practice perceived performance improvements.

For demo purpose, imagine a `LanguageSelect` component that performs an async action when the language is changed. We're pretty confident that, upon clicking, the language will be changed. Though, we have to wait for our API request to resolve and update the [Redux](https://redux.js.org/) state `language` field so that our component would re-render.

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../actions';

const languages = [
  { value: 'en', label: '🇺🇸 English' },
  { value: 'de', label: '🇩🇪 Deutsch' },
  { value: 'lt', label: '🇱🇹 Lietuvių' },
];

function LanguageSelect() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  return (
    <select
      value={language}
      onChange={async ({ target: { value: newValue } }) => {
        await dispatch(changeLanguage(newValue));
      }}
    >
      {languages.map((language) => (
        <option key={language.value} value={language.value}>
          {language.label}
        </option>
      ))}
    </select>
  );
}
```

The state update delay can easily be mitigated with a couple `useState` and `useEffect` hooks. Just store the temporary value to the component state and don't forget to update it once the `language` value gets resolved.

```js {14-17,23}
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../actions';

const languages = [
  { value: 'en', label: '🇺🇸 English' },
  { value: 'de', label: '🇩🇪 Deutsch' },
  { value: 'lt', label: '🇱🇹 Lietuvių' },
];

function LanguageSelect() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [value, setValue] = useState(language);
  useEffect(() => {
    setValue(language);
  }, [language]);

  return (
    <select
      value={value}
      onChange={async ({ target: { value: newValue } }) => {
        setValue(newValue);
        await dispatch(changeLanguage(newValue));
      }}
    >
      {languages.map((language) => (
        <option key={language.value} value={language.value}>
          {language.label}
        </option>
      ))}
    </select>
  );
}
```

This approach seems pretty simple, and most of the time it gets the job done. But what if we use the `language` field elsewhere? How would we share the temporary optimistic state outside `LanguageSelect`? Like, for example, showing a user's language flag.

```js
import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const value = useSelector((state) => state.language);
  return (
    <header>
      <img src="https://karolis.sh/static/logo.png" alt="logo" />
      <span>{{ en: '🇺🇸', de: '🇩🇪', lt: '🇱🇹' }[value]}</span>
    </header>
  );
}
```

To solve this issue, we could [lift the state up](https://reactjs.org/docs/lifting-state-up.html) to context or maybe make a separate Redux reducer to store optimistic values. Both approaches might work, but what if you'd want to modify optimistic values directly in async calls or don't even want to use a specific state manager? Everything can be developed, but all this sounds like a major feature... and the deadline is nearing. We need something simple 🤔... and there is!

I wrote a small utility library - [`use-optimistic-update`](https://www.npmjs.com/package/use-optimistic-update). It is **lightweight**, built on top of an **event emitter** and doesn't need Redux or even React Context integrations. Let's see how we could make the `LanguageSelect` optimistic with minimal effort.

```js {3,15,21}
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOptimisticUpdate } from 'use-optimistic-update';
import { changeLanguage } from '../actions';

const languages = [
  { value: 'en', label: '🇺🇸 English' },
  { value: 'de', label: '🇩🇪 Deutsch' },
  { value: 'lt', label: '🇱🇹 Lietuvių' },
];

function LanguageSelect() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const { value, onUpdate } = useOptimisticUpdate('LANGUAGE', language);

  return (
    <select
      value={value}
      onChange={async ({ target: { value: newValue } }) => {
        await onUpdate(() => dispatch(changeLanguage(newValue)), newValue);
      }}
    >
      {languages.map((language) => (
        <option key={language.value} value={language.value}>
          {language.label}
        </option>
      ))}
    </select>
  );
}
```

Sharing the optimistic state with other components is also rather easy.

```js {2,5}
import React from 'react';
import { useOptimisticState } from 'use-optimistic-update';

function Header() {
  const { value } = useOptimisticState('LANGUAGE');
  return (
    <header>
      <img src="https://karolis.sh/static/logo.png" alt="logo" />
      <span>{{ en: '🇺🇸', de: '🇩🇪', lt: '🇱🇹' }[value]}</span>
    </header>
  );
}
```

And that's it - the language change action, as a whole, became optimistic. The library also exposes APIs (used by the same React hooks) for direct state manipulations, so it should cover most of the edge cases when dealing with predictable updates.

## Conclusion

The optimistic UI pattern is a simple, yet effective, way to overcome physical limitations and achieve better user experience. Your app logic might be complex and implementation of such pattern might seem daunting at first, but it does not have to be that way. Start by gradually converting each action and maybe give [`use-optimistic-update`](https://www.npmjs.com/package/use-optimistic-update) a try. Good luck!
