import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { BeatLoader } from "react-spinners";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const url = "http://localhost:8800/auth/register";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>NEW PLAYER</h1>
            <input
              type="text"
              placeholder="Player name"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.input}
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.blue_btn}>
              {isLoading ? (
                <BeatLoader color={"#fff"} loading={isLoading} size={10} />
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
        <div className={styles.left}>
          <h1 style={{ textAlign: "center" }}>PLAY NOW!</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
