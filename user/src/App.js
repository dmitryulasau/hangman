import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Game from "./component/Game";
import "./App.css";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/:wordId" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
