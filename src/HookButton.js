import React, { useState } from "react";

const HookButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked me {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default HookButton;
