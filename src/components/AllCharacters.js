import React from "react";
import { Link } from "react-router-dom";

const AllCharacters = ({ data }) => {
  return (
    <>
      <div className="contenair-card">
        {data.results.map((characters, index) => {
          return (
            <div key={characters.id}>
              {/* apres on mettra un link a la place de div ci dessous qui ramene vers chaque perso individuellement */}
              <div>
                <div className="one-card">
                  <img
                    src={
                      characters.thumbnail.path +
                      "." +
                      characters.thumbnail.extension
                    }
                    alt=""
                  />
                  <span>{characters.name}</span>
                  <span>{characters.description}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllCharacters;
