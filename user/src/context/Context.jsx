import React, { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
import axios from "axios";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    if (state.user) {
      axios
        .get(`https://hangman-80z3.onrender.com/auth/user/${state.user._id}`)
        .then((response) => {
          dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        })
        .catch((error) => {
          console.log("Error retrieving user:", error);
        });
    }
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};
