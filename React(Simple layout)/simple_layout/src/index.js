import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import contentImages from "./Images/pokemon.jpg";
import App from "./Components/App/App";

const image = <img src={contentImages} alt={""} />;
const store = {
  user: {
    firstName: "Bulbasaur",
    lastName: "フシギダネ",
  },
  avatar: {
    image: image,
    alt: "Bulbasaur is a cute Pokémon born with a large seed firmly affixed to its back; the seed grows in size as the Pokémon does. Along with Squirtle and Charmander, Bulbasaur is one of the three Pokémon available at the beginning of Pokémon Red and Blue. It evolves into Ivysaurs.",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App userDate={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
