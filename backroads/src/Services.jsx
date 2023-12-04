import { serviceArray } from "./data.js";
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <div className="section-title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div className="section-center services-center">
          {serviceArray.map((ele) => {
            return (
              <article className="service">
                <span className="service-icon">
                  <i className="fas fa-wallet fa-fw"></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{ele.title}</h4>
                  <p className="service-text">{ele.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Services;
