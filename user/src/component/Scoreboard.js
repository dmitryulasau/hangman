import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import axios from "axios";

export default function Scoreboard({ isWinner }) {
  const { user, setUser } = useContext(Context);
  console.log(user);
  console.log(isWinner);

  const updateUserScore = async (username) => {
    try {
      const response = await axios.put(
        `https://hangman-80z3.onrender.com/auth/update-score/${user._id}`,
        {
          score: user.score + 10, // Update the score
        }
      );
      console.log(response.data); // Log the updated user object
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `https://hangman-80z3.onrender.com/auth/${user._id}`
      );
      console.log(response.data); // Log the retrieved user object
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isWinner) {
    updateUserScore(user.username);
  }

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
