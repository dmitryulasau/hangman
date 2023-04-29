import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";

export default function Scoreboard({ isWinner }) {
  const { user } = useContext(Context);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/auth/users")
      .then((response) => {
        const sortedUsers = response.data.sort((a, b) => b.score - a.score);
        setUsers(sortedUsers);
      })
      .catch((error) => {
        console.log("Error retrieving users:", error);
      });
  }, []);

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

        maxHeight: "65vh",
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
          color: "#d9480f",
        }}
      >
        <div>#</div>
        <div>PLAYER</div>
        <div>PTS</div>
      </div>
      <div style={{ width: "100%", overflow: "auto" }}>
        {users.map((user, index) => (
          <div
            key={user._id}
            style={{
              display: "flex",
              padding: "5px 5px",
              justifyContent: "space-between",

              backgroundColor: "#ced4da",
              marginTop: "5px",
            }}
          >
            <div>{index + 1}</div>
            <div style={{}}>
              {user.username.length > 5
                ? user.username.slice(0, 5).toUpperCase()
                : user.username.toUpperCase()}
            </div>
            <div style={{}}>{user.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
