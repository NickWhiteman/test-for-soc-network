import './style/style.css';
import React from 'react';

import { IButtonProps } from "./types";

const ButtonContainer: React.FC<IButtonProps> = (props) => {
  return <Button {...props} />
}

const Button: React.FC<IButtonProps> = ({
  mode,
  type,
  children,
  link,
  onClick
}) => {
  switch (mode) {
    case 'button-close':
      return (
        <button
          className='button__close'
          type='button'
          onClick={onClick}>{children}</button>
      );
    case 'button-link':
      return (
        <button
          className={`button${link ? `_${link}` : ''}`}
          type='button'
          onClick={onClick}>{children}</button>
      );
    case 'button-primary':
      return (
        <button
          className='button__primary'
          type={type ? type : 'button'}
          onClick={onClick}>{children}</button>
      );
    default:
      return <></>;
  };
};

export default React.memo(ButtonContainer);