import React from 'react';
import styled from 'styled-components';

import Kode from './Kode';
import Social from './social';
import Skills from './skills';


const Wrapper = styled.div`
  height: 100%;
  background: url(${`${process.env.PUBLIC_URL}/img/milky-way-bw.jpg`}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  color: white;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;

  & .-logo {
    margin-bottom: 2rem;
  }

  & .-text {
    margin: 1.5rem 0;
  }

  & .-social {
    margin-top: 3rem;
  }

  @media(min-width: 600px) {
    width: 70%;
    margin-left: 10%;

    & .-social {
      margin-top: 6rem;
    }
  }

  @media(min-width: 1200px) {
    width: 50%;
    margin-left: 15%;
  }
`;


const App = () =>
  <Wrapper>
    <Content>
      <Kode className='-logo' />
      <h3>
        Karolis Šarapnickis - Senior Software Developer
      </h3>
      <p className='-text'>
        {`
          I build high quality web/mobile/desktop apps using JavaScript technologies.
          I have experience working with the whole stack but I'm more front-end oriented developer.
        `}
      </p>
      <p>
        {`
          Key technologies I'm experienced with:
        `}
      </p>
      <Skills />
      <Social className='-social' />
    </Content>
  </Wrapper>;

export default App;
