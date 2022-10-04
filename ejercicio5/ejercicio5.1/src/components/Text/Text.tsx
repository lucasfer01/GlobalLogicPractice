import React from "react";

interface Props {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Text = ({ value, className, style }: Props) => {
  return (
    <p className={`${className}`} style={style}>
      {value}
    </p>
  );
};
