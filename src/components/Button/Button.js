import React from "react";
import styles from "./Button.module.css";
function Button({ onClick, text }) {
  return (
    <div>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
export default Button;
