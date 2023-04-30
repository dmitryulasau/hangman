import React, { useState, useEffect } from "react";
import styles from "./ShareModal.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import { BeatLoader } from "react-spinners";

export default function ShareModal({ onClose }) {
  const [generatedLink, setGeneratedLink] = useState("");
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleGenerateLink() {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://hangman-80z3.onrender.com/words/add",
        { word }
      );
      const wordId = response.data._id;

      const link = `https://hangman-dmitryulasau.vercel.app/${wordId}`;
      setGeneratedLink(link);

      console.log("Word saved to database:", response.data);
      setIsLoading(true);
    } catch (error) {
      console.error("Error saving word to database:", error);
    }
    setIsLoading(false);
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
        <h2>Share with friends</h2>

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
          {isLoading ? (
            <BeatLoader color={"#fff"} loading={isLoading} size={10} />
          ) : (
            "GENERATE A LINK"
          )}
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
