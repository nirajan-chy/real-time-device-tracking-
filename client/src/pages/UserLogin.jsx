import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    setUserData({
      email: email,
      passowrd: passowrd,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img className="w-25 ml- mb-8  " src="/public/logo.png" alt="" />
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl mb-2">What's your email?</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border  w-full text-lg placeholder:text-base"
              type="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="email@example.com"
              required
            />
            <h3 className="text-xl mb-2">Enter Password </h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border  w-full text-lg placeholder:text-base"
              type="password"
              value={passowrd}
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
              <Link to="signup" className="text-blue-600">
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
