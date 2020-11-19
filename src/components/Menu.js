import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/characters">
                {" "}
                <p>Characters</p>
              </Link>
            </li>
            <li>
              <Link to="/comics">
                {" "}
                <p>Comics</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                {" "}
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
