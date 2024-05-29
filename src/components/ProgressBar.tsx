import React from "react";

interface PropsProgressBar {
  bgColor: string;
  width: number;
  scale: number;
}

const ProgressBar = ({ bgColor, width, scale }: PropsProgressBar) => {
  return (
    <div className="progress">
      <div
        className="progress__line"
        style={{
          width: `${width > 100 ? 100 : width}%`,
          backgroundColor: `${bgColor}`,
        }}
      >
        <span>{scale} per tap</span>
      </div>
    </div>
  );
};

export default ProgressBar;
