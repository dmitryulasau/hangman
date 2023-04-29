import React, { useState } from "react";
import styles from "./ShareModal.module.css";

export default function ShareModal({ onClose }) {
  const [generatedLink, setGeneratedLink] = useState("");
  const [word, setWord] = useState("");

  function handleGenerateLink() {
    // Generate a random link or use an API to generate a unique link
    const link =
      "http://example.com/" + Math.random().toString(36).substr(2, 9);
    setGeneratedLink(link);
  }

  function handleCopyLink() {
    // Copy the generated link to the clipboard
    navigator.clipboard.writeText(generatedLink);
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
        >
          COPY LINK<i className="fas fa-copy"></i>
        </button>
      </div>
    </div>
  );
}
