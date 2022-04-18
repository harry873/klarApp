import React from "react";

const NotePad = () => {
  return (
    <div style={{ width: "7.8rem", margin: "0 auto" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 48 48"
      >
        <g fill="none" stroke="#585A5C" stroke-width="4">
          <path d="M18 8h-7a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-7" />
          <path d="M18 13V8h3.95a.05.05 0 0 0 .05-.05V6a3 3 0 1 1 6 0v1.95c0 .028.022.05.05.05H32v5a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1Z" />
        </g>
      </svg>
    </div>
  );
};

export default NotePad;
