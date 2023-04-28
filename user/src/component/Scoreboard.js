import React from "react";

export default function Scoreboard() {
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
        <div>KATE</div>
        <div>80</div>
      </div>
    </div>
  );
}
