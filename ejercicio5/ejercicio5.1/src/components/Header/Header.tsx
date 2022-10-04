import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/globallogic-logo.svg";
import { Avatar } from "../Avatar/Avatar";

const { Header__container, Header__logo, Header__avatar } = style;

interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: JSX.Element | JSX.Element[];
}

export const Header = ({ className, style, children }: Props) => {
  return (
    <div className={`${Header__container} ${className}`} style={style}>
      {children}
    </div>
  );
};
