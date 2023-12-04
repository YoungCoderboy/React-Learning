import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./About";
import Services from "./Services";
import Tourcard from "./Tourcard";
import Links from "./Links";
import Navli from "./Navli";
import Footer from "./Footer";

const Banner = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
};
const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          <Navli class_name="nav-link" />
        </ul>
        <Links class_name1="nav-icon" class_name2="nav-icons" />
      </div>
    </nav>
  );
};
const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Tourcard />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
