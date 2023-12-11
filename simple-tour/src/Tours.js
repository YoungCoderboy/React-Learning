import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div className="title">
        <h2>Ours Tours </h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // console.log(tour);
          return <Tour key={tour.id} data={tour} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
