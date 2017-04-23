import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';


const Container = styled.a`
  font-size: 20px;
  border: 2px solid white;
  border-radius: 5px;
  padding: .1em .2em 0 .2em;
  text-decoration:none;
  color: white;
`;


const Resume = () =>
  <Container
    href={`${process.env.PUBLIC_URL}Karolis_Résumé.pdf`} download onClick={() => {
      ReactGA.event({
        category: 'Resume',
        action: 'Download',
      });
    }}
  >
    CV
  </Container>;

export default Resume;
