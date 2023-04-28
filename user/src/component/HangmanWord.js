import React from "react";

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {wordToGuess[0].split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal
                  ? "#fa5252"
                  : "#087f5b",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
