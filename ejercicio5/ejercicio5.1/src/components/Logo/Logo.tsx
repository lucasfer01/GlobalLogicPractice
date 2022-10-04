import React from 'react';
import CssStyle from './Logo.module.css';

const {Logo__img} = CssStyle;

interface Props {
    logo: string;
    className?: string;
    style?: React.CSSProperties;
}

export const Logo = ({logo, className, style}: Props) => {
  return (
    <img 
        src={logo} 
        alt={"GlobalLogic Logo"} 
        style={style}
        className={`${Logo__img} ${className}`} 
    />
  )
}
