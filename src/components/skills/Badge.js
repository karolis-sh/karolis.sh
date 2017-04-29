import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.span`
  background-color: white;
  color: black;
  border-radius: 1em;
  font-size: 14px;
  padding: .125em .6em .16em .5em;
`;


const Badge = ({children}) =>
  <Container>
    #{children}
  </Container>;

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Badge;
