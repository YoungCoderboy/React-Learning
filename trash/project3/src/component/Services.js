import React from "react";
import { services } from "../data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {services.map((ele) => {
          return (
            <article className="service" key={ele.id}>
              <span className="service-icon">
                <i className={ele.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{ele.title}</h4>
                <p className="service-text">{ele.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
