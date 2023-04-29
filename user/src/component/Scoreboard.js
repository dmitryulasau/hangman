import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";

export default function Scoreboard({ isWinner }) {
  const { user } = useContext(Context);

  useEffect(() => {
    if (isWinner) {
      axios
        .put(`http://localhost:8800/auth/update-score/${user._id}`, {
          score: user.score + 10,
        })
        .then((response) => {
          console.log("Score updated successfully");
        })
        .catch((error) => {
          console.log("Error updating score:", error);
        });
    }
  }, [isWinner]);

  return (
    <div
      style={{
        backgroundColor: "#f1f3f5",
        minHeight: "65vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "0.8rem",
      }}
    >
      <div
        style={{
          padding: "1rem 0",
          backgroundColor: "#fd7e14",
          borderBottom: "3px solid #dee2e6",
          width: "100%",
          textAlign: "center",
          borderTopLeftRadius: "0.8rem",
          borderTopRightRadius: "0.8rem",
        }}
      >
        SCOREBOARD:
      </div>
      <div
        style={{
          width: "100%",
          padding: "1rem 0rem",
          display: "flex",
          backgroundColor: "#ced4da",
          justifyContent: "space-around",
          marginTop: "5px",
        }}
      >
        <div>1</div>
        <div>{user.username.toUpperCase()}</div>
        <div>{user.score}</div>
      </div>
    </div>
  );
}
