import React, { forwardRef } from "react";

const ChildForwardref = (props,ref) => {
  return (
    <div>
      <h2>ChildForwardref</h2>
      <input type="text" ref={ref} />
    </div>
  );
};

export default forwardRef (ChildForwardref);
