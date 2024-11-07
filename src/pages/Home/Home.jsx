import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImg from "/public/img/background-home.svg";
import "./Home.css";
import "./responsive-Home.css";

export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    getLogments();
  }, []);

  const getLogments = async () => {
    const response = await fetch("https://titi.startwin.fr/logements/");
    const data = await response.json();
    setLogements(data);
  };

  return (
    <section>
      <div className="hero__container">
        <img src={backgroundImg} className="hero__container-img" />
        <p className="hero__container-text">Chez vous, partout ailleurs</p>
      </div>
      <div className="logements__container">
        {logements.slice(0, 6).map((logement) => (
          <Link
            to={`/logement/${logement.id}`}
            key={logement.id}
            className="logements__container-map"
          >
            <img
              src={logement.cover}
              alt={logement.title}
              className="container__map-img"
            />
            <p className="container__map-text">{logement.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
