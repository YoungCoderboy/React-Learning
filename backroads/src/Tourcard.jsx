import { tour } from "./data";
const Tourcard = () => {
  return (
    <>
      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div className="section-center featured-center">
          {tour.map((ele) => {
            return (
              <article className="tour-card">
                <div className="tour-img-container">
                  <img src={ele.img} className="tour-img" alt="" />
                  <p className="tour-date">{ele.date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{ele.title}</h4>
                  </div>
                  <p>{ele.description}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {ele.country}
                    </p>
                    <p>{ele.day}</p>
                    <p>from {ele.cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      ;
    </>
  );
};
export default Tourcard;
