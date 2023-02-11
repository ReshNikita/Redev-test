import React from "react";

//параметры снизу вверх

const TestInfo = ({ callbackFunction }) => {
  return (
    <div>
      <button onClick={() => callbackFunction(10)}>Click here</button>
    </div>
  );
};

export default TestInfo;
