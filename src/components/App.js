import React from 'react';
import styled from 'styled-components';

import Kode from './Kode';


const Wrapper = styled.div`
  height: 100%;
  background: url(${`${process.env.PUBLIC_URL}/img/milky-way-bw.jpg`}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  color: white;
  padding: 1rem;
`;


export default () =>
  <Wrapper>
    <Content>
      <Kode />
      <p>
        Karolis Šarapnickis - JavaScript Developer
      </p>
    </Content>
  </Wrapper>;
