import React from "react";
import CSSStyle from "./Answer.module.css";
import { Question } from "../index";

const { Answer__container, Answer__text } = CSSStyle;

interface Props {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  children?: JSX.Element;
}

export const Answer = ({ value, className, style, children }: Props) => (
  <Question
    value={value}
    className={`${Answer__container} ${Answer__text} ${className}`}
    style={style}
    children={children}
  />
);

// export const Answer = ({value, className, style}: Props) => {
//   return (
//     <div className={`${Answer__container} ${className}`} style={style}>
//         <p className={`${Answer__text}`}>{value}</p>
//     </div>
//   )
// }
