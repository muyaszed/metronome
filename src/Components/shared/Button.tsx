import React from 'react'

interface Props {
  title: string;
  handleOnClick: () => void;
  className: string;
}

const Button = ({ title, handleOnClick, className }: Props) => {
  return (
    <button onClick={handleOnClick} className={className}>{title}</button>
  );
};

export default Button;