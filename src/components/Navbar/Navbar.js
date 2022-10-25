import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div>
      <nav>
        <img alt="PokéAPI-logo" src={logoImg} className={styles.logo} />
      </nav>
    </div>
  );
}
export default Navbar;
