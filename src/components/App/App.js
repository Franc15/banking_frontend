import React, {useState} from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";
import useToken from "./useToken";

import control from '../../assets/control.png';

function logout() {
  sessionStorage.clear();
  window.location.reload();
}

function App() {
  const {token, setToken} = useToken();
  const [open, setOpen] = useState(true);
  const Menus = [
    {'title': 'Dashboard', 'path': '/dashboard', 'icon': 'dashboard'},
    {'title': 'Transactions', 'path': '/transactions', 'icon': 'transactions'},
    {'title': 'Preferences', 'path': '/preferences', 'icon': 'preferences'},
    {'title': 'Logout', 'path': '/logout', 'icon': 'logout'}
  ]

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="flex">
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen bg-gray-900 relative`}>
        <img src={control} alt='control' className={`absolute cursor-pointer rounded-full
        -right-3 top-9 w-7 border-2 border-green-500 ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)} />
        <div className="flex gap-x-4 items-center">
          <img src="" alt="" className="w-10 h-10 rounded-full duration-500" />
          <h1 className={`text-white text-xl font-medium duration-300 ${!open && 'scale-0'}`}><span className="text-green-400 font-bold">b</span>ig boys bank</h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (

            <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer">
              <img src="" alt="" className="w-10 h-10 rounded-full duration-500" />
              {menu.title}
            </li>

          ))}
        </ul>
      </div>
      <div className="flex-1 h-screen">
        <h1>BigBoys Bank</h1>
        <button className="hover:bg-red-400 group flex items-center rounded-md bg-red-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm" onClick={logout}>Log out</button>
        
        <BrowserRouter>
          <Routes>
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
      </div>
  );
}

export default App;
