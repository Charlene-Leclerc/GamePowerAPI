import React, { useEffect, useState } from "react";
import axios from "axios";

export default function API() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //Lecture de la BD
      try {
        const response = await axios.get("http://localhost:3000/");
        console.log(response.data);
        setData(response.data);
        //Si erreur
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données:",
          error
        );
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <h1>Teste MongoDB</h1>
      {data.map((elem, index) => {
        return (
          <>
            <div key={index}></div>
            <p> {elem.name}</p>
            <p>{elem.price}</p>
          </>
        );
      })}
    </section>
  );
}
