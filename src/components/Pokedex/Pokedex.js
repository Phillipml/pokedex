import React from "react";
import styles from "./Pokedex.module.css";

function Pokedex() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Pokedex</h1>
        <div>Páginação:</div>
      </div>
    </div>
  );
}
export default Pokedex;
