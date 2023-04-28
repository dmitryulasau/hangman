import React from "react";
const Header = ({ wordToGuess }) => {
  return (
    <div
      style={{
        backgroundColor: "#f1f3f5",
        minWidth: "100%",
        borderRadius: "0.8rem",
        color: "#0C4160",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>{wordToGuess[1].toUpperCase()}</h3>
    </div>
  );
};
export default Header;
