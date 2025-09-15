import { useState, useCallback } from "react";
import { ChildButton } from "../ChildButton/ChildButton";

export const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("Counter render");

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <ChildButton onClick={handleClick} label="Click me" />
    </div>
  );
};
