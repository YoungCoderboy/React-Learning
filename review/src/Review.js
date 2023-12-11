import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const randomPerson = () => {
    let number = Math.floor(Math.random() * people.length);
    if (number === index) number = checkNumber(index + 1);
    setIndex(() => {
      return number;
    });
  };
  const checkNumber = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;

    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = checkNumber(index + 1);
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = checkNumber(index - 1);
      return newIndex;
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson} className="random-btn">
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
