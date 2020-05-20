import React from 'react';

import github from './svg/github.svg';
import twitter from './svg/twitter.svg';
import linkedin from './svg/linkedin.svg';
import email from './svg/email.svg';

const style = { width: 20, height: 20 };

export const Github = () => {
  return <img src={github} style={style} alt="Github" />;
};

export const Twitter = () => {
  return <img src={twitter} style={style} alt="Twitter" />;
};

export const Linkedin = () => {
  return <img src={linkedin} style={style} alt="Linkedin" />;
};

export const Email = () => {
  return <img src={email} style={style} alt="email" />;
};
