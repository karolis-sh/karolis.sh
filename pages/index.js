import styled from 'styled-components';

import {Header, Footer} from '../components';


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;


export default () =>
  <Wrapper>
    <Header />
    <Content>
      y0
    </Content>
    <Footer />
  </Wrapper>;
