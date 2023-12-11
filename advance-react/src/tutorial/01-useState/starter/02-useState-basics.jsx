import { useState } from "react";
const UseStateBasics = () => {
  // console.log(useState());
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (count === 0) setCount(count + 10);
    else setCount(count + 1);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Click ME</button>
    </>
  );
};

export default UseStateBasics;
