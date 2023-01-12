import React, {useState} from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import Transactions from "../Transactions/Transactions";
import Login from "../Login/Login";
import useToken from "./useToken";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMoneyBill,faGear, faRightFromBracket, faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";

import logo from '../../assets/logo.png';

function logout() {
  sessionStorage.clear();
  window.location.reload();
}

function App() {
  const {token, setToken} = useToken();
  const [open, setOpen] = useState(true);
  const Menus = [
    {'title': 'Dashboard', 'path': '/dashboard', 'icon': faHome},
    {'title': 'Transactions', 'path': '/transactions', 'icon': faMoneyBill},
    {'title': 'Preferences', 'path': '/preferences', 'icon': faGear},
    {'title': 'Logout', 'path': '/logout', 'icon': faRightFromBracket, 'gap': true}
  ]

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-54" : "w-20 "
        } bg-gray-900 h-screen p-2  pt-8 relative duration-300`}
      >
        
        <FontAwesomeIcon icon={faSquareCaretLeft} className={`absolute cursor-pointer -right-3 top-9 w-8 text-green-400
         ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            BB Bank
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-gray-300 hover:text-gray-600 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"}`}
            >
              <FontAwesomeIcon icon={Menu.icon} className="text-green-400" />
              {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 h-screen p-5">
        <h1>BigBoys Bank</h1>
        <button className="hover:bg-red-400 group flex items-center rounded-md bg-red-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm" onClick={logout}>Log out</button>
        
        <BrowserRouter>
          <Routes>
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions/:accountId" element={<Transactions />} />
          </Routes>
        </BrowserRouter>
      </div>
      </div>
  );
}

export default App;
