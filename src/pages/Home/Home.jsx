import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImg from "/public/img/background.png";
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
    <>
      <div className="hero__container">
        <img src={backgroundImg} className="hero__container-img" />
        <p className="hero__container-text">Chez vous, partout ailleurs</p>
      </div>
      <div>
        {logements.slice(0, 6).map((logement) => (
          <div key={logement.id}>
            <p>{logement.id}</p>
            <p>{logement.title}</p>
            <Link to={`/logement/${logement.id}`}>go to</Link>
          </div>
        ))}
      </div>
    </>
  );
}
