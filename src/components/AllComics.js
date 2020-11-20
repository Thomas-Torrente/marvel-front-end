import React from "react";
import { Link } from "react-router-dom";

const AllComics = ({ data }) => {
  return (
    <>
      <div className="contenair-card">
        {data.results.map((comics, index) => {
          return (
            <>
              <div key={comics.id}>
                {/* apres on mettra un link a la place de div ci dessous qui ramene vers chaque perso individuellement */}
                <div>
                  <div className="one-card">
                    <span>{comics.name}</span>
                    <img
                      src={
                        comics.thumbnail.path + "." + comics.thumbnail.extension
                      }
                      alt=""
                    />

                    <span>{comics.description}</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllComics;
