import React from 'react';
import cssStyle from './Question.module.css';

const { Question__container, Question__text } = cssStyle;

interface Props {
    value: string;
    className?: string;
    style?: React.CSSProperties;
    children?: JSX.Element | JSX.Element[];
}


export const Question = ({value, className, style, children}: Props) => {

  return (
    <>
    <div className={`${Question__container} ${className}`} style={style}>
        <h1 className={`${Question__text}`}>{value}</h1>
    </div>

    {children}
    </>
  )
}
