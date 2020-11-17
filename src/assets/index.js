import React from 'react';

import email from './components/email.svg';
import github from './components/github.svg';
import linkedin from './components/linkedin.svg';
import twitter from './components/twitter.svg';
import logo from './components/logo.svg';
import pronunciation from './components/pronunciation.svg';

export { getUrl } from './utils';

const iconStyle = { width: 20, height: 20 };

export const SVG = {
  Email: (props) => <img {...props} src={email} style={iconStyle} alt="email" />,
  Github: (props) => <img {...props} src={github} style={iconStyle} alt="Github" />,
  Linkedin: (props) => <img {...props} src={linkedin} style={iconStyle} alt="LinkedIn" />,
  Twitter: (props) => <img {...props} src={twitter} style={iconStyle} alt="Twitter" />,
  Logo: (props) => <img {...props} style={{ width: 60, height: 30 }} src={logo} alt="logo" />,
  Pronunciation: (props) => <img {...props} src={pronunciation} alt="/’karolɪs ʃarapnətskɪs/" />,
};
