import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Container({ children, className }) {
  return (
    <div
      style={{ maxWidth: 800 }}
      className={cx('mx-auto px-4 sm:px-6 md:px-10', className)}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
