import React from 'react';
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

function Resume(props) {
  return (
    <div {...props}>
      <Container
        href='/Karolis_CV.pdf'
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

export default Resume;
