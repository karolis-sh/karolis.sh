import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { callGA } from '../utils';

const Container = styled.a`
  font-size: 20px;
  border: 2px solid white;
  border-radius: 5px;
  padding: 0.1em 0.2em 0 0.2em;
  text-decoration: none;
  color: white;
`;

function Resume({ file, ...props }) {
  return (
    <div {...props}>
      <Container
        href={file}
        download
        onClick={() => {
          callGA('send', 'event', 'Resume', 'Download');
        }}
      >
        CV
      </Container>
    </div>
  );
}

Resume.propTypes = {
  file: PropTypes.string.isRequired,
};

export default Resume;
