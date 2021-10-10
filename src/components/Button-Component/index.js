import React from 'react';
import './style.css';

// const variant = ['outline', 'text'];
// const disableShadow = 'disableShadow';
// const startIcon = 'startIcon';
// const endIcon = 'endIcon';
// const size = ['sm', 'md', 'lg'];
// const color = ['default', 'primary', 'secondary', 'danger'];

const Button = ({
  children,
  variant = 'default',
  disableShadow = false,
  startIcon = false,
  endIcon = false,
  size = 'md',
  color = 'default',
  ...restProps
}) => {
  const checkDisableShadow = disableShadow ? 'disableShadow' : '';
  return (
    <div>
      <button
        className={`button ${variant} ${size} ${color} ${checkDisableShadow}`}
        {...restProps}
      >
        {startIcon ? startIcon : null}
        {children || 'Default'}
        {endIcon ? endIcon : null}
      </button>
    </div>
  );
};

export default Button;
