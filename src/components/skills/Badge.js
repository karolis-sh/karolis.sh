import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled.span`
  background-color: white;
  color: black;
  border-radius: 1em;
  font-size: 14px;
  padding: 0.125em 0.6em 0.16em 0.5em;
`;

function Badge({ children }) {
  return <Container>#{children}</Container>;
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Badge;
