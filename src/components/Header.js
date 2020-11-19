import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-contenair">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/800px-MarvelLogo.svg.png"
            alt=""
          />
        </Link>

        <input type="text" placeholder="Rechercher" className="search-input" />
      </div>
    </>
  );
};

export default Header;
