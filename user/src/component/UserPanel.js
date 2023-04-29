import React from "react";
import styles from "./UserPanel.module.css";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

function handleLogout() {
  localStorage.removeItem("user");
  window.location.href = "/login";
}

function handleNewGame() {
  window.location.reload();
}

export default function UserPanel() {
  const { user } = useContext(Context);
  return (
    <div
      style={{
        backgroundColor: "#f1f3f5",

        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        minHeight: "65vh",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          padding: "1rem 0",
          backgroundColor: "#c3fae8",
          borderBottom: "3px solid #dee2e6",

          width: "100%",
          textAlign: "center",
          borderTopLeftRadius: "0.8rem",
          borderTopRightRadius: "0.8rem",
        }}
      >
        HI, {user.username.toUpperCase()}!
      </div>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#212529",
          width: "120px",
          height: "120px",
          color: "#32A956",
          borderRadius: "4px",
          fontSize: "40px",
        }}
      >
        {user.score}{" "}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          alignSelf: "center",
          gap: "10px",
        }}
      >
        <button className={styles.btn_new} onClick={handleNewGame}>
          NEW GAME
        </button>
        <button className={styles.btn_share}>SHARE</button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <button className={styles.btn_logout} onClick={handleLogout}>
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
}
