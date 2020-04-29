import React from 'react';

import github from './svg/github.svg';
import twitter from './svg/twitter.svg';

const style = { width: 20, height: 20 };

export const Github = () => {
  return <img src={github} style={style} alt="Github" />;
};

export const Twitter = () => {
  return <img src={twitter} style={style} alt="Twitter" />;
};
