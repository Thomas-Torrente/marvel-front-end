import React, { useState, useEffect } from "react";
import axios from "axios";

import AllCharacters from "../components/AllCharacters";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await axios.get(
      "https://back-marvel-torrente.herokuapp.com/characters"
    );
    console.log(response.data);

    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    // Permet de n'afficher qu'une seule fois dans la condition
    fetchData();
  }, []);
  return isLoading ? (
    <div className="isLoading"></div>
  ) : (
    <>
      <div className="characters-page">
        <div className="banniere-characters">
          <img
            src="https://i.pinimg.com/originals/01/23/a2/0123a2ee36a7ce61af7c9ab6732b5c9e.jpg"
            alt=""
          />

          <h1>Characters</h1>
          <div>
            <AllCharacters data={data} setData={setData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
