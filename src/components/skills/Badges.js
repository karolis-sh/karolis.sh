import React from 'react';
import styled from 'styled-components';

import Badge from './Badge';


const Container = styled.div`
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
    <Badge>Node</Badge>
    <Badge>React</Badge>
    <Badge>React-Native</Badge>
    <Badge>Electron</Badge>
    <Badge>HTML</Badge>
    <Badge>CSS</Badge>
  </Container>;

export default Badges;
