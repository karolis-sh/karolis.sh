import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';

import * as icons from './icons';


const Container = styled.a`
  display: flex;
  text-decoration:none;
  color: white;
  align-items: center;
`;

const Svg = styled(Isvg)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: .5rem;
  fill: white;
`;


const Link = ({link, icon, text, ...props}) =>
  <Container href={link} target='_blank' {...props}>
    <Svg src={icons[icon]} alt={`${icon}_icon`} />
    {text}
  </Container>;

Link.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

Link.defaultProps = {
  link: null,
};

export default Link;
