import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {visible && <div className="tooltip-text">{text}</div>}
      {children}
    </div>
  );
};

export default Tooltip;
