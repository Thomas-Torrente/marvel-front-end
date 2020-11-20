import React, { useState, useEffect } from "react";
import axios from "axios";
import AllComics from "../components/AllComics";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await axios.get(
      "https://back-marvel-torrente.herokuapp.com/comics"
    );
    // console.log(response.data); OK affiche un tableau.

    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <div className="isLoading"></div>
  ) : (
    <>
      <div className="characters-page">
        <div className="banniere-characters">
          <img src="https://pbs.twimg.com/media/D4Heu7aWAAAHUa6.jpg" alt="" />

          <h1>Comics</h1>
        </div>
        <div>
          <AllComics data={data} setData={setData} />
        </div>
      </div>
    </>
  );
};

export default Comics;
