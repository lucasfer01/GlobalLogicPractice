import React from 'react';
import CssStyle from './DispatchButton.module.css';
import {useDispatch} from 'react-redux'

interface Props {
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    dispatchValue: any;
    children?: string;
}

export const DispatchButton = ({onClick, className, style, dispatchValue, children}: Props) => {

  const dispatch = useDispatch();

  function handleClick() {
    onClick && onClick();
     console.log(dispatchValue());
     

    dispatch(dispatchValue());
  }

  return (
    <button className={`${className}`} style={style} onClick={handleClick}>{children}</button>
  )
}
