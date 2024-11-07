import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState({});

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

  //   {logement.pictures &&
  //     logement.pictures.map((picture) => (
  //       <img src={picture} key={picture} alt="" />
  //     ))}

  return (
    logement && (
      <>
        <img src={logement.cover} alt="" />
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>

        <div className="tags__container">
          {logement.tags && logement.tags.map((tag) => <p key={tag}>{tag}</p>)}
        </div>
        <div>{logement.rating}</div>
        <div>
          {logement.host && (
            <div>
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          )}
        </div>
        <div>
          <div className="description__container">
            <h3>Descripiton</h3>
            {logement.description}
          </div>

          <div className="equipement__container">
            <h3>Equipement</h3>
            <ul>
              {logement.equipments &&
                logement.equipments.map((equipement, index) => (
                  <li key={index}>{equipement}</li>
                ))}
            </ul>
          </div>
        </div>
      </>
    )
  );
}
