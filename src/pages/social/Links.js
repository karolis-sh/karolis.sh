import React from 'react';
import styled from 'react-emotion';

import Link from './Link';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Reverse = styled.span`
  unicode-bidi: bidi-override;
  direction: rtl;
`;

const Links = props => (
  <Container className='wat' {...props}>
    <Link icon='gmail' text={<Reverse>moc.liamg@k.satsap</Reverse>} />
    <Link icon='github' text='/buz-zard/_archive' url='https://github.com/buz-zard/_archive' />
    <Link icon='linkedin' text='/karolissarapnickis' url='https://www.linkedin.com/in/karolissarapnickis' />
    <Link icon='facebook' text='/karolis.sarapnickis' url='https://www.facebook.com/karolis.sarapnickis' />
    <Link icon='twitter' text='/smuklininkas' url='https://twitter.com/smuklininkas' />
    <Link
      icon='stackoverflow'
      text='/Karolis-Šarapnickis'
      url='http://stackoverflow.com/users/2256839/Karolis-Šarapnickis'
    />
  </Container>
);

export default Links;
