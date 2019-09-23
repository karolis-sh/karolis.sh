import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Link from './Link';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Reverse = styled.span`
  unicode-bidi: bidi-override;
  direction: rtl;
`;

function Social({ links, ...props }) {
  return (
    <Container {...props}>
      {links.map(item => (
        <Link
          key={item.icon}
          icon={item.icon}
          url={item.url}
          text={
            item.noScrape ? (
              <Reverse>
                {item.text
                  .split('')
                  .reverse()
                  .join('')}
              </Reverse>
            ) : (
              item.text
            )
          }
        />
      ))}
    </Container>
  );
}

Social.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      url: PropTypes.string,
      noScrape: PropTypes.bool,
    })
  ).isRequired,
};

export default Social;
