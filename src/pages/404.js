import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Header = styled.h1`
  color: white;
  text-align: center;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <Header>404</Header>
    </Wrapper>
  );
}
