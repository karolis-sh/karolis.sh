import React from 'react';
import styled from 'react-emotion';

const Container = styled.a`
  font-size: 20px;
  border: 2px solid white;
  border-radius: 5px;
  padding: 0.1em 0.2em 0 0.2em;
  text-decoration: none;
  color: white;
`;

const Resume = props => (
  <div {...props}>
    <Container
      href='/Karolis_CV.pdf'
      download
      onClick={() => {
        console.log(window.ga);
        // ReactGA.event({
        //   category: 'Resume',
        //   action: 'Download',
        // });
      }}
    >
      CV
    </Container>
  </div>
);

export default Resume;
