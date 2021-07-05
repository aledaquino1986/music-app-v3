import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useButtonContext } from "../../context/buttonLibraryContext";

import "./nav.css";

const Nav = () => {
  const { changeButtonState } = useButtonContext();

  return (
    <nav className="nav">
      <h1>Chillhop sounds</h1>
      <button onClick={changeButtonState}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
