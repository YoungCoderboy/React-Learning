import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((ele) => {
        return (
          <article key={ele.id} className="person">
            <img src={ele.image} alt={ele.name} />
            <div>
              <h4>{ele.name}</h4>
              <p>{ele.age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
