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
      <h1>BigBoys Bank</h1>
      <button className="hover:bg-red-400 group flex items-center rounded-md bg-red-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm" onClick={logout}>Log out</button>
      
      <BrowserRouter>
        <Routes>
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
