import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Isvg from 'react-inlinesvg';

import { callGA } from '../../utils';
import * as icons from './icons';

const Container = styled.div`
  display: table;
`;

const Content = styled.a`
  text-decoration: none;
  color: white;
`;

const Svg = styled(Isvg)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  fill: white;
`;

function Link({ url, icon, text, ...props }) {
  return (
    <Container>
      <Content
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        onClick={() => {
          callGA(
            'send',
            'event',
            'SocialLink',
            `Click${icon[0].toUpperCase()}${icon.slice(1)}`
          );
        }}
        {...props}
      >
        <Svg src={icons[icon]} title={`Link to ${icon}`} />
        {text}
      </Content>
    </Container>
  );
}

Link.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default Link;
