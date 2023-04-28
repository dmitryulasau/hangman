import React from "react";

export default function Hangman({ numberOfGuesses }) {
  const backgroundImage =
    numberOfGuesses <= 1
      ? "url('https://res.cloudinary.com/dulasau/image/upload/v1682649140/happy_ynbpgj.png')"
      : numberOfGuesses <= 3
      ? "url('https://res.cloudinary.com/dulasau/image/upload/v1682649461/confused_dfvk2f.png')"
      : numberOfGuesses < 6
      ? "url('https://res.cloudinary.com/dulasau/image/upload/v1682649439/sad_txtirh.png')"
      : "url('https://res.cloudinary.com/dulasau/image/upload/v1682649534/dead_ysyyhi.png')";

  const HEAD = (
    <div
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid #212529",
        position: "absolute",
        top: "50px",
        right: "-30px",
      }}
    />
  );

  const BODY = (
    <div
      style={{
        width: "10px",
        height: "100px",
        background: "#212529",
        position: "absolute",
        top: "120px",
        right: "0",
      }}
    />
  );

  const RIGHT_ARM = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "#212529",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    />
  );

  const LEFT_ARM = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "#212529",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  const RIGHT_LEG = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "#212529",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  );

  const LEFT_LEG = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "#212529",
        position: "absolute",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  const styles = {
    backgroundImage:
      "url('https://res.cloudinary.com/dulasau/image/upload/v1682647979/raven_x3hbgx.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50px",
    width: "50px",
    position: "absolute",
    left: "140px",
    top: "-40px",
    zIndex: "1",
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          maxWidth: "325px",
          margin: "0 auto",
        }}
      >
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div
          style={{
            position: "absolute",
            height: "40px",
            width: "10px",
            background: "#f59f00",
            top: 10,
            right: 0,
          }}
        />
        <div style={styles}></div>
        <div
          style={{
            height: "10px",
            width: "205px",
            background: "	#805333",
            marginLeft: "120px",
          }}
        />

        <div
          style={{
            width: "100px",
            height: "10px",
            background: "#805333",
            position: "absolute",
            top: "70px",
            right: "95px",
            rotate: "-45deg",
            transformOrigin: "left bottom",
          }}
        />

        <div
          style={{
            height: "400px",
            width: "10px",
            background: "#805333",
            marginLeft: "120px",
          }}
        />
        <div
          style={{ height: "20px", width: "250px", background: "#2b8a3e" }}
        />
      </div>
    </>
  );
}
