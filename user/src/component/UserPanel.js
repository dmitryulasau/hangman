import React, { useContext, useState } from "react";
import styles from "./UserPanel.module.css";

import { Context } from "../context/Context";
import ShareModal from "./ShareModal";

import { toast } from "react-toastify";

export default function UserPanel() {
  const { user, dispatch } = useContext(Context);
  const [showShareModal, setShowShareModal] = useState(false); // State for showing/hiding the share modal

  function handleLogout() {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    console.log("LOGGED OUT!");
    window.location.href = "/login";
  }

  function handleNewGame() {
    window.location.reload();
    window.location.href = "/game";
  }

  function handleRegister2() {
    toast.info("PLEASE REGISTER");
  }

  function handleRegister() {
    window.location.reload();
    window.location.href = "/register";
  }

  function handleShare() {
    setShowShareModal(true); // Show the share modal
  }

  function handleCloseModal() {
    setShowShareModal(false); // Hide the share modal
  }

  const isIdLink = window.location.href;
  console.log(isIdLink.length);

  if (isIdLink.length > 50) {
    return (
      <div
        style={{
          backgroundColor: "#f1f3f5",
          borderRadius: "8px",
          minHeight: "65vh",
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
          HI, GUEST!
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
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          0
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",

            gap: "10px",
          }}
        >
          <button className={styles.btn_new} onClick={handleRegister2}>
            NEW GAME
          </button>
          <button className={styles.btn_share} onClick={handleRegister2}>
            SHARE
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "50px",
            }}
          >
            <button className={styles.btn_logout} onClick={handleRegister}>
              REGISTER
            </button>
          </div>
        </div>
        {showShareModal && <ShareModal onClose={handleCloseModal} />}
      </div>
    );
  }

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
        <button className={styles.btn_share} onClick={handleShare}>
          SHARE
        </button>
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
      {showShareModal && <ShareModal onClose={handleCloseModal} />}
    </div>
  );
}
