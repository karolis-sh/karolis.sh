import React from 'react';
import styled from 'styled-components';

import Badge from './Badge';


const Container = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin: -.25rem;
  
  > * {
    margin: .25rem;
  }
`;


const Badges = () =>
  <Container>
    <Badge>JavaScript</Badge>
    <Badge>React</Badge>
    <Badge>Redux</Badge>
    <Badge>HTML</Badge>
    <Badge>CSS</Badge>
    <Badge>React-Native</Badge>
    <Badge>Electron</Badge>
    <Badge>Node</Badge>
  </Container>;

export default Badges;
