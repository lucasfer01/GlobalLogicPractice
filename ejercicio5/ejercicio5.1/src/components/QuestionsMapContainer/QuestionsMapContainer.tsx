import React from "react";
import style from "./QuestionsMapContainer.module.css";
import { Questions } from "../../interfaces/reducerInterface";

const {} = style;

interface Props {
  value: Array<any>;
  children?: (value: any) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
}

export const QuestionsMapContainer = ({ value, children, className, style }: Props) => {
  return (
    <div className={`${className}`} style={style}>
      {
        !!value.length && value.map((item) => (
          <div key={item.id}>
            {
              children && children(item)
            }
          </div>
        ))
      }
    </div>
  );
};
