import React from 'react';
import styled from 'react-emotion';

import backgroundImage from '../style/img/milky-way-bw.jpg';
import { Kode, Resume, Social, Skills } from '../components';
import data from '../data';

const SpaceBackground = styled.div`
  height: 100%;
  background: url(${`${backgroundImage}`}) no-repeat center center fixed;
  background-color: black;
  background-size: cover;
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
  margin-bottom: 2rem;

  > *:last-child {
    margin-top: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 25px;
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

function Page() {
  return (
    <SpaceBackground>
      <Container>
        <Wrapper>
          <Header>
            <Kode />
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
    </SpaceBackground>
  );
}

export default Page;
