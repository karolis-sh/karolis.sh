import React from 'react';
import styled from 'react-emotion';

import imgHigh from '../style/img/milky-way-high.jpg';
import { Resume, Social, Skills } from '../components';
import data from '../data';

const SpaceBackground = styled.div`
  background: url(${`${imgHigh}`}) no-repeat center center fixed;
  background-color: black;
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  color: white;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
`;

const Wrapper = styled.div`
  @media (min-width: 600px) {
    width: 70%;
    margin-left: 8%;
  }

  @media (min-width: 1200px) {
    width: 50%;
    margin-left: 16%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  > *:first-child {
    font-size: 1.5rem;
    background: #f7df1e;
    color: #000;
    padding: 0.1rem 0.75rem 0.1rem 0;
    margin-right: 1rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    &:before {
      content: 'x';
      background: #f7df1e;
      position: absolute;
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
      margin-top: -0.1rem;
      margin-left: -100%;
      width: 100vw;
    }
  }
`;

const Heading = styled.h1`
  font-size: 1.25rem;
`;

const IntroText = styled.p`
  margin: 1.5rem 0;
`;

const SocialWrapper = styled.div`
  margin-top: 3rem;

  @media (min-width: 600px) {
    margin-top: 4.5rem;
  }

  @media (min-width: 1200px) {
    margin-top: 6rem;
  }
`;

const TestBadge = styled.div`
  background: #f7df1e;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.75rem;
  padding: 0.1rem;
`;

class Page extends React.Component {
  componentDidMount() {
    if (!document.getElementById('webfontloader')) {
      const wf = document.createElement('script');
      const s = document.scripts[0];
      wf.src =
        'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      wf.id = 'webfontloader';
      wf.onload = () => {
        global.WebFont.load({ google: { families: ['Varela+Round'] } });
      };

      s.parentNode.insertBefore(wf, s);
    }
  }

  render() {
    return (
      <SpaceBackground>
        <Container>
          <Wrapper>
            <Header>
              <div>Karolis Šarapnickis</div>
              <Resume file={`/${data.cvFile}`} />
            </Header>
            <Heading>{data.title}</Heading>
            <IntroText>{data.introText}</IntroText>
            <Skills title={data.skillsTitle} items={data.skills} />
            <SocialWrapper>
              <Social links={data.socialLinks} />
            </SocialWrapper>
          </Wrapper>
        </Container>
        {process.env.GATSBY_ENV === 'test' && <TestBadge>test</TestBadge>}
      </SpaceBackground>
    );
  }
}

export default Page;
