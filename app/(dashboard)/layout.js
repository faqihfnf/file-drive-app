import React from "react";

function layout({ children }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  );
}

export default layout;
