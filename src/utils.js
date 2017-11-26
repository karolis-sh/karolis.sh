const callGA = (...args) => {
  if (process.env.NODE_ENV === 'production' && typeof ga === 'function') {
    window.ga(...args);
  } else {
    console.debug('Calling GA with:', ...args); // eslint-disable-line
  }
};

export { callGA };
