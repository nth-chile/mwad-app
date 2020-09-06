/* eslint-disable react/button-has-type */
import React, {
  ReactNode, MouseEventHandler,
} from 'react';

interface Props {
  active?: boolean;
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  type?: 'button' | 'submit' | 'reset' | undefined;
  // any other props that come into the component
}

const Button = React.forwardRef((props: Props, ref: any) => {
  const {
    active = false,
    ariaLabel,
    children,
    className = '',
    disabled = false,
    onClick,
    onMouseEnter,
    onMouseLeave,
    type = 'button',
  } = props;

  return (
    <button
      aria-label={ariaLabel}
      className={`${className} ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      type={type}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
