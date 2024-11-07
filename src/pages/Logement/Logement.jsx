import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./logement.css";
import "./responsive-Logmenent.css";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState({});
  const [description, setDescription] = useState("hidden");
  const [equipements, setEquipement] = useState("hidden");

  useEffect(() => {
    getLogment();
  }, []);

  const getLogment = async () => {
    try {
      const response = await fetch(`https://titi.startwin.fr/logements/${id}`);
      const data = await response.json();
      setLogement(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    logement && (
      <section className="logement__container">
        <img
          src={logement.cover}
          alt={logement.title}
          className="logement__container-img"
        />
        <div className="logement__container-title">
          <div className="logement__container-h1">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>
          {logement.host && (
            <div className="container__h1-host">
              <p>{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="h1__host-img"
              />
            </div>
          )}
        </div>
        <div className="tags__and__stars-container">
          <div className="tags__container">
            {logement.tags &&
              logement.tags.map((tag) => <p key={tag}>{tag}</p>)}
          </div>
          <div className="stars__container">note : {logement.rating} / 5</div>
        </div>
        <div className="info__container">
          <div
            className="description__container"
            onClick={() =>
              description === "hidden"
                ? setDescription("show")
                : setDescription("hidden")
            }
          >
            <h2>Description</h2>
            <p className={description}>{logement.description}</p>
          </div>
          <div
            className="description__container"
            onClick={() =>
              equipements === "hidden"
                ? setEquipement("show")
                : setEquipement("hidden")
            }
          >
            <h2>Equipement</h2>
            <ul>
              {logement.equipments &&
                logement.equipments.map((equipement, index) => (
                  <li className={equipements} key={index}>
                    {equipement}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    )
  );
}
