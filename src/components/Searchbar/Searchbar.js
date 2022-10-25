import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Searchbar.module.css";
function Searchbar(props) {
  const { onSearch } = props;

  const [search, setSearch] = useState("dito");

  const onChangeler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonHandler = () => {
    onSearch(search);
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <input placeholder="Search Pokemon" onChange={onChangeler} />
      </div>
      <Button text="Search" onClick={onButtonHandler} />
    </div>
  );
}
export default Searchbar;
