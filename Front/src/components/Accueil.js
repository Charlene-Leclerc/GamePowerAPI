import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Accueil() {
  const [game, setGame] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      //Lecture de la BD
      try {
        const responses = await axios.get("http://localhost:3000/giveaways");
        console.log(responses);
        setGame(responses.data);
        //Si erreur
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données:",
          error
        );
      }
    };

    fetchDatas();
  }, []);
  return (
    <section className="accueil">
      {game.slice(0, 18).map((elem, id) => {
        return (
          <button key={id}>
            <h3>{elem.title}</h3>
            <p>{elem.description}</p>
            <img src={elem.image} alt="" />
            <p>Prix :{elem.worth}</p>
          </button>
        );
      })}
    </section>
  );
}
