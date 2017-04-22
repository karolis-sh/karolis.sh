import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  font-family: 'Varela Round', sans-serif;
  position: relative;
  letter-spacing: 5px;
  font-size: 20px;
  margin-top: 1.1em;
  margin-left: .1em;

  &:before {
    content: 'K';
    position: absolute;
    top: -1.1em;
  }

  &:after {
    content: 'C';
    position: absolute;
    border-radius: 3px;
    background: #f7df1e;
    color: black
    height: 1em;
    left: -.1em;
    padding-left: .1em;
    padding-bottom: .1em;
    width: .9em;
  }
`;


const Kode = props =>
  <div {...props}>
    <Wrapper>
      C<span style={{marginLeft: '.15em'}}>ODE</span>
    </Wrapper>
  </div>;

export default Kode;
