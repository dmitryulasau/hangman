import React, { useState, useEffect } from "react";
import styles from "./ShareModal.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import Game from "./Game"; // import the component that renders the game

export default function ShareModal({ onClose }) {
  const [generatedLink, setGeneratedLink] = useState("");
  const [word, setWord] = useState("");

  async function handleGenerateLink() {
    try {
      // Add the word to the database and get its ID
      const response = await axios.post(
        "https://hangman-80z3.onrender.com/words/add",
        { word }
      );
      const wordId = response.data._id;

      // Generate a link based on the word ID
      const link = `https://hangman-dmitryulasau.vercel.app/${wordId}`;
      setGeneratedLink(link);

      console.log("Word saved to database:", response.data);
    } catch (error) {
      console.error("Error saving word to database:", error);
    }
  }

  function handleCopyLink() {
    if (generatedLink) {
      try {
        navigator.clipboard.writeText(generatedLink);
        toast.info("Link copied!");
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Share a word</h2>

        <input
          className={styles.word_input}
          type="text"
          value={word}
          onChange={handleWordChange}
          placeholder="PRESS 'SHIFT' TO TYPE A WORD"
        />
        <input
          className={styles.link_input}
          type="text"
          value={generatedLink}
          readOnly={true}
          placeholder="YOUR LINK WILL BE HERE"
        />
        <button
          className={styles.generate_link_button}
          onClick={handleGenerateLink}
        >
          GENERATE LINK
        </button>
        <button
          className={styles.generate_link_button}
          onClick={handleCopyLink}
          disabled={!generatedLink}
        >
          COPY LINK<i className="fas fa-copy"></i>
        </button>
      </div>
    </div>
  );
}
