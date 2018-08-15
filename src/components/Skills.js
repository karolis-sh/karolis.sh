import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Badges = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin: -0.25rem;

  > * {
    margin: 0.25rem;
  }
`;

const Badge = styled.span`
  background-color: white;
  color: black;
  border-radius: 1em;
  font-size: 14px;
  padding: 0.15em 0.5em;
`;

function Skills({ title, items }) {
  return (
    <div>
      <p>{title}</p>
      <Badges>{items.map(item => <Badge key={item}>{item}</Badge>)}</Badges>
    </div>
  );
}

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;
