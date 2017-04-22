import React from 'react';
import styled from 'styled-components';

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


const Links = props =>
  <Container className='wat' {...props}>
    <Link icon='gmail' text={<Reverse>moc.liamg@k.satsap</Reverse>} />
    <Link icon='github' text='/buz-zard/_archive' link='https://github.com/buz-zard/_archive' />
    <Link icon='linkedin' text='/karolissarapnickis' link='https://www.linkedin.com/in/karolissarapnickis' />
    <Link icon='facebook' text='/karolis.sarapnickis' link='https://www.facebook.com/karolis.sarapnickis' />
    <Link icon='twitter' text='/smuklininkas' link='https://twitter.com/smuklininkas' />
  </Container>;

export default Links;
