import React from 'react';
import { Global } from '@emotion/core';

export function GlobalStyle(props) {
  return (
    <Global
      styles={{
        html: {
          backgroundColor: 'black',
        },
        body: {
          margin: 0,
          fontFamily: '"Varela Round", sans-serif',
          fontSize: '18px',
        },
        '*': {
          boxSizing: 'border-box',
        },
      }}
      {...props}
    />
  );
}
