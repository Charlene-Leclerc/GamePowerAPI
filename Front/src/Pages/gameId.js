import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [gameDetail, setGameDetail] = useState(null);

  console.log(id);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/giveaway/${id}`
        );
        setGameDetail(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      }
    };

    fetchGameData();
  }, [id]);

  if (!gameDetail) {
    return <div>Loading...</div>;
  }

  return (
    <section className="detail">
      <p>Id = {id}</p>
      <h2>{gameDetail.title}</h2>
      <p>{gameDetail.description}</p>
      <img src={gameDetail.image} alt="" />
    </section>
  );
}
