import React from "react";

export default function AddPathParameters() {
  const a = 3;
  const b = 4;
  const sum = a + b;

  return (
      <div id="wd-path-parameters">
        <h2>Add Path Parameters</h2>
        {a} + {b} = {sum}
      </div>
  );
}
