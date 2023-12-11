import { data } from "../../../data";
import { useState } from "react";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };
  const removeAll = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h1 onClick={() => removeItem(id)} style={{ cursor: "pointer" }}>
              {name}
            </h1>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button onClick={removeAll} className="btn">
        Clear All
      </button>
      ;
    </div>
  );
};

export default UseStateArray;
