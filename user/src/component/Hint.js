import React, { useState } from "react";
import styles from "./Hint.module.css";

export default function Hint({ wordToGuess }) {
  const [showHint, setShowHint] = useState(false);
  const buttonText = Array.isArray(wordToGuess)
    ? wordToGuess[2].toUpperCase()
    : "NO HINT IN CHALLENGE MODE";

  const handleClick = () => {
    setShowHint(!showHint);
  };

  const backgroundColor = showHint ? "#ffec99" : "#c5f6fa";

  return (
    <div
      className={`${styles.btn_hint}`}
      onClick={handleClick}
      style={{
        minWidth: "100%",
        borderRadius: "0.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0",
        backgroundColor,
      }}
    >
      {showHint ? buttonText : "PRESS TO SHOW A HINT"}
    </div>
  );
}
