import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';

import Kode from './Kode';
import Resume from './Resume';
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

  & .-text {
    margin: 1.5rem 0;
  }

  & .-social {
    margin-top: 3rem;
  }

  > div {
    @media(min-width: 600px) {
      width: 70%;
      margin-left: 10%;

      & .-social {
        margin-top: 4.5rem;
      }
    }

    @media(min-width: 1200px) {
      width: 50%;
      margin-left: 15%;

      & .-social {
        margin-top: 6rem;
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  & .-resume {
    margin-top: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 25px;
`;


class App extends React.Component {

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Wrapper>
        <Content>
          <div>
            <Header>
              <Kode />
              <Resume className='-resume' />
            </Header>
            <Heading>
              Karolis Šarapnickis - Senior Software Developer
            </Heading>
            <p className='-text'>
              {`
                I build high quality web/mobile/desktop apps using JavaScript technologies.
                I have experience working with the whole stack but I'm more of a Front-end oriented Software Developer.
              `}
            </p>
            <p>
              {`
                Key technologies I'm experienced with:
              `}
            </p>
            <Skills />
            <Social className='-social' />
          </div>
        </Content>
      </Wrapper>
    );
  }
}

export default App;
