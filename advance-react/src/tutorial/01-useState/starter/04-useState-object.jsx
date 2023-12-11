import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Peter");
  const [age, setage] = useState(24);
  const [hobby, setHobby] = useState("Read Books");
  const handleClick = () => {
    setName("John");
    setage(24);
    setHobby("Scream at Computer");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys : {hobby}</h4>
      <button className="btn" onClick={handleClick}>
        change
      </button>
    </>
  );
};

export default UseStateObject;
