import React from 'react';
import CssStyle from './ResponseContainer.module.css';

const {ResponseContainer__container} = CssStyle;

interface Props {
    children?: JSX.Element | JSX.Element[];
    className?: string;
    style?: React.CSSProperties;
}

export const ResponseContainer = ({children, className, style}: Props) => {
  return (
    <div className={`${ResponseContainer__container} ${className}`} style={style}>
        {children}
    </div>
  )
}
