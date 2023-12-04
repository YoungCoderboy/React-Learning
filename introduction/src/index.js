import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/test.css";
const Greeting = () => {
  return <h1>hello world</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
