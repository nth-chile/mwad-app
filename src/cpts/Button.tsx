import React from 'react';
import UnstyledButton from './common-unstyled/Button';

const variantToClass: { [k: string]: string } = {
  primary: 'btn-primary',
  'outline-primary': 'btn-outline-primary',
  secondary: 'btn-secondary',
  'outline-secondary': 'btn-outline-secondary',
  unstyled: 'btn-unstyled',
  link: 'btn-link',
};

interface Props {
  active?: boolean;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  type?: 'button' | 'submit' | 'reset' | undefined
  variant?: string;
}

const Button = React.forwardRef((props: Props, ref: any) => {
  const classStr = `${props.className ? props.className : ''} btn ${props.variant ? variantToClass[props.variant] : 'btn-unstyled'} ${props.disabled ? 'cursor-not-allowed' : ''}`;

  return (
    <UnstyledButton
      active={props.active}
      ariaLabel={props.ariaLabel}
      className={classStr}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      ref={ref}
      type={props.type}
    >
      {props.children}
    </UnstyledButton>
  );
});

export default Button;
