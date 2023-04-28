import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { BeatLoader } from "react-spinners";

import { useContext, useRef } from "react";
import { Context } from "../context/Context";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://hangman-80z3.onrender.com/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      window.location = "/game";
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>LOGIN TO PLAY</h1>
            <input
              type="text"
              placeholder="Player name"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.input}
              ref={userRef}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
              ref={passwordRef}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button
              type="submit"
              className={styles.blue_btn}
              disabled={isFetching || isLoading}
            >
              {isLoading ? (
                <BeatLoader color={"#fff"} loading={isLoading} size={10} />
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1 style={{ textAlign: "center" }}>New?</h1>
          <Link to="/register">
            <button type="button" className={styles.white_btn}>
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
