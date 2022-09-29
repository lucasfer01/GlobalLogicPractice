import React, { useState } from "react";

interface Props {
  render: (style: React.CSSProperties) => JSX.Element;
}

export const Field = ({ render }: Props) => {

  const [mouse, setMouse] = useState<{ x: number; y: number }>();

  function handleMouseMove(mouseEvent: React.MouseEvent<HTMLDivElement, MouseEvent>) {

    const { pageX, pageY } = mouseEvent;

    setMouse({
      x: pageX,
      y: pageY
    });
  }

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        marginBottom: "2rem",
        backgroundColor: "green",
        boxShadow: '0 0 6px rgba(0, 0, 0, .7)'
      }}
      onMouseMove={handleMouseMove}
    >
      {render({
        position: "absolute",
        left: mouse?.x,
        top: mouse?.y
      })}
    </div>
  );
};
