import React from 'react';
import './style.css';

const Button = ({
  children,
  variant = '',
  disableShadow = false,
  startIcon = false,
  endIcon = false,
  size = '',
  color = '',
  ...restProps
}) => {
  const checkDisableShadow = disableShadow ? 'disableShadow' : '';
  return (
    <div>
      <button
        className={`btn ${variant} ${size} ${color} ${checkDisableShadow} `}
        {...restProps}
      >
        {startIcon ? (
          <span className="material-icons start-icon">{startIcon}</span>
        ) : null}
        {children || 'Default'}
        {endIcon ? (
          <span className="material-icons end-icon">{endIcon}</span>
        ) : null}
      </button>
    </div>
  );
};

export default Button;
