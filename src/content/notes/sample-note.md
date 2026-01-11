---
title: Sample Note - Testing All Features
description: A test note to verify code highlighting, images, and other markdown features work correctly.
topic: Testing
---

This is a sample note to test all the features. Let's start with some **bold text**, _italic text_, and `inline code` to make sure basic formatting works.

## Code Blocks

Here's a JavaScript example with line highlighting:

```js {3-5}
function greet(name) {
  // This is a comment
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}

greet('World');
```

And a shell script:

```bash
#!/bin/bash
echo "Hello from shell"
npm install
npm run build
```

Some TypeScript with types:

```ts {1,5-7}
interface User {
  name: string;
  email: string;
}

function createUser(data: User): User {
  return { ...data };
}
```

## Links

Here's a [link to Google](https://google.com) and another to [GitHub](https://github.com).

## Lists

Unordered list:

- First item
- Second item
  - Nested item
  - Another nested
- Third item

Ordered list:

1. Step one
2. Step two
3. Step three

## Blockquote

> This is a blockquote. It should stand out from the regular text and look nice.
>
> It can span multiple lines too.

## Horizontal Rule

---

## Inline Code Examples

You can use `const` and `let` for variable declarations. The `Array.map()` method is useful for transformations. Don't forget to `npm install` first!

## Image

Here's a test image (using the profile photo from public folder):

![Profile photo](/profile.jpg)

## Table

| Feature           | Status  |
| ----------------- | ------- |
| Code highlighting | Working |
| Line numbers      | Working |
| Inline code       | Working |
| Links             | Working |
| Images            | Working |

## Final Notes

That's it for the test. If everything above renders correctly, the note system is working properly.
