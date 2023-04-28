import { useCallback, useEffect, useState } from "react";
import words from "../wordList.json";
import Header from "./Header";
import HeaderWinner from "./HeaderWinner";
import "../App.css";
import Scoreboard from "./Scoreboard";
import Hint from "./Hint";
import Hangman from "./Hangman";
import Keyboard from "./Keyboard";
import UserPanel from "./UserPanel";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import HangmanWord from "./HangmanWord";
import HeaderLoser from "./HeaderLoser";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function Game() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess[0].includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess[0]
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter]); // guessedLetters

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <Box sx={{ maxWidth: 1100, margin: "0 auto" }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Scoreboard isWinner={isWinner} />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={3} direction="column">
            <Grid item>
              {!isWinner && !isLoser && <Header wordToGuess={wordToGuess} />}
              {isWinner && <HeaderWinner />}
              {isLoser && <HeaderLoser />}
            </Grid>
            <Grid item sx={{ marginBottom: "30px" }}>
              <Hint wordToGuess={wordToGuess} />
            </Grid>
            <Grid item>
              <Hangman numberOfGuesses={incorrectLetters.length} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <UserPanel />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <HangmanWord
            reveal={isLoser}
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
          />
        </Grid>
        <Grid item xs={12} sx={{ alignSelf: "stretch" }}>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess[0].includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Game;
