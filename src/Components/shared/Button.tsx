import React from 'react'

interface Props {
  title: string;
  handleOnClick: () => void;
  className: string;
  active?: boolean;
  activeClassName?: string;
}

const Button = ({ 
  title, 
  handleOnClick,
  className,
  active = false,
  activeClassName = ''
}: Props) => {
  return (
    <button onClick={handleOnClick} className={`${className} ${active ? activeClassName : ''}`}>{title}</button>
  );
};

export default Button;