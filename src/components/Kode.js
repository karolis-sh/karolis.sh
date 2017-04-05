import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  margin: 1rem 0;
  font-family: 'Varela Round', sans-serif;
  flex: 1;
  position: relative;
  letter-spacing: 5px;
  font-size: 20px;

  &:before {
    content: 'K';
    position: absolute;
    top: -.85em;
  }

  &:after {
    content: '';
    position: absolute;
    left: -.04em;
    bottom: .18em;
    height: .9em;
    border-radius: 3px;
    background: #f7df1e;
    width: .82em;
    opacity: 0.5;
  }
`;


const Kode = () =>
  <Wrapper>
   CODE
  </Wrapper>;

export default Kode;
