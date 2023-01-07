import React, {useState} from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";
import useToken from "./useToken";

function logout() {
  sessionStorage.clear();
  window.location.reload();
}

function App() {
  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <button onClick={logout}>Log out</button>
      <BrowserRouter>
        <Routes>
          <Route path="/preferences" element={<Preferences/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
