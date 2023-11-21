import React from "react";

export default function Spinner({ color, visible }) {
  if (!visible) return null;
  return (
    <div className="spinner-container">
      <div
        style={{ color: color, borderTopColor: color }}
        className="loading-spinner"
      />
    </div>
  );
}
