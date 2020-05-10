/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import cx from 'classnames';
import theme from 'prism-react-renderer/themes/vsDark';
import Highlight, { defaultProps } from 'prism-react-renderer';

// Ref - https://github.com/kentcdodds/kentcdodds.com/blob/master/src/components/mdx/code.js
const RE = /{([\d,-]+)}/;
function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map((v) => v.split('-').map((y) => parseInt(y, 10)));
    return (index) => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      );
      return inRange;
    };
  }
  return () => false;
}

function Code({ children: codeString, className: language, metastring }) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  return (
    <div className="mdx-code">
      <Highlight
        {...defaultProps}
        code={codeString.slice(0, -1)}
        language={language && language.replace('language-', '')}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="overflow-auto -mx-4 sm:-mx-6 md:-mx-8">
            <pre
              className={cx(
                className,
                'p-3 rounded overflow-initial min-w-full float-left text-sm'
              )}
              style={style}
            >
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({
                    line,
                    key: i,
                    className: shouldHighlightLine(i)
                      ? 'highlight border-teal-500 -mx-3'
                      : undefined,
                  })}
                >
                  <span className="inline-block opacity-50 w-8 select-none">{i + 1}</span>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    </div>
  );
}

export const components = {
  h1: (props) => (
    <h1 className="table mb-5 text-4xl font-medium tracking-tight leading-snug" {...props} />
  ),
  h2: (props) => (
    <h2 className="table mb-5 text-3xl font-medium tracking-tight leading-snug" {...props} />
  ),
  h3: (props) => (
    <h3 className="table mb-5 text-2xl font-medium tracking-tight leading-snug" {...props} />
  ),
  h4: (props) => (
    <h4 className="table mb-5 text-xl font-medium tracking-tight leading-snug" {...props} />
  ),
  h5: (props) => (
    <h5 className="table mb-5 text-lg font-medium tracking-tight leading-snug" {...props} />
  ),
  h6: (props) => <h6 className="table mb-5 font-medium leading-snug" {...props} />,
  a: (props) => <a className="text-teal-700 underline" {...props} />,
  p: (props) => <p className="mb-5 leading-relaxed" {...props} />,
  ul: (props) => <ul className="list-disc list-inside" {...props} />,
  ol: (props) => <ul className="list-decimal list-inside" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 pl-5 text-gray-600 border-gray-300 font-serif italic"
      {...props}
    />
  ),
  img: ({ src, title, ...props }) => (
    <span>
      <img src={src} className="mx-auto" {...props} />
      {title.includes('@') && (
        <span className="absolute text-xs mx-auto right-0">
          Photo by{' '}
          <a
            href={title.split('@')[1]}
            className="text-teal-700 underline"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {title.split('@')[0]}
          </a>
        </span>
      )}
    </span>
  ),
  hr: (props) => <hr className="my-12" {...props} />,
  pre: (props) => <pre className="my-8 lg:my-10" {...props} />,
  code: Code,
  inlineCode: (props) => <code className="bg-teal-100 px-1 py-px rounded" {...props} />,
};
