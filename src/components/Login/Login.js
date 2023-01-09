import React, {useState} from "react";
import './Login.css';
import PropTypes from 'prop-types';

const API_URL = 'http://localhost:5000/login';


async function loginUser(credentials) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login({ setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        // redirect to dashboard
        window.location.href = '/dashboard';

    }


    return (
<div className="bg-gradient-to-tr from-green-300 to-green-600 h-screen w-full flex justify-center items-center">
    <div className="bg-green-600 w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
      <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl">Hello</h1>
        <p className="text-5xl font-extrabold">Welcome!</p>
      </div>
      <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
        <h3 className="text-3xl font-bold text-green-600 mb-4">
          LOGIN
        </h3>
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center">
          <div className="mb-4">
            <input type="text" placeholder="Username" className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600" onChange={e => setUserName(e.target.value)}  />
          </div>
          <div className="mb-4">
            <input type="password" placeholder="Password" className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600" onChange={e => setPassword(e.target.value)}  />
          </div>
          <button type="submit" className="bg-green-600 font-bold text-white focus:outline-none rounded p-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>

    );
}

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}