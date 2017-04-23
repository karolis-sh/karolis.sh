import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';

import Link from './Link';


const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: .5rem;
  }
`;

const Reverse = styled.span`
  unicode-bidi: bidi-override;
  direction: rtl;
`;


const linkClick = type => () => ReactGA.event({
  category: 'SocialLink',
  action: `Click${type}`,
});


const Links = props =>
  <Container className='wat' {...props}>
    <Link icon='gmail' text={<Reverse>moc.liamg@k.satsap</Reverse>}
      onClick={linkClick('Gmail')}
    />
    <Link icon='github' text='/buz-zard/_archive' link='https://github.com/buz-zard/_archive'
      onClick={linkClick('Github')}
    />
    <Link icon='linkedin' text='/karolissarapnickis' link='https://www.linkedin.com/in/karolissarapnickis'
      onClick={linkClick('Linkedin')}
    />
    <Link icon='facebook' text='/karolis.sarapnickis' link='https://www.facebook.com/karolis.sarapnickis'
      onClick={linkClick('Facebook')}
    />
    <Link icon='twitter' text='/smuklininkas' link='https://twitter.com/smuklininkas'
      onClick={linkClick('Twitter')}
    />
  </Container>;

export default Links;
