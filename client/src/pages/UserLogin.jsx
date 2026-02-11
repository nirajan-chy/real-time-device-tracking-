import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = async (res, e) => {
    e.preventDefault();
    setUserData({
      email: email,
      passowrd: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img className="w-20 ml-1 mb-6  " src="/public/logo.png" alt="" />
          <form onSubmit={handleSubmit}>
            <h3 className="text-[18px] mb-1.5">What's your email?</h3>
            <input
              className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border  w-full text-lg placeholder:text-base"
              type="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="email@example.com"
              required
            />
            <h3 className="text-[18px] mb-1.5">Enter Password </h3>
            <input
              className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border  w-full text-lg placeholder:text-base"
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              required
            />
            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border  w-full text-lg placeholder:text-base ">
              Login
            </button>
            <p className="text-center">
              New here ?
              <Link to="/signup" className="text-blue-600">
                Create new Account
              </Link>
            </p>
          </form>
        </div>
        <div>
          <Link
            to="/captain-login"
            className="bg-white flex items-center justify-center text-black font-semibold mb-7 rounded px-4 py-2 border border-black/20 w-full text-lg hover:bg-black hover:text-white transition duration-300"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
