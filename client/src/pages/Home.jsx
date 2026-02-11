import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-screen bg-cover bg-center bg-[url(/public/background.png)] pt-5  flex justify-between flex-col w-full bg-red-400">
        <img className="w-30 ml-5  " src="/public/logo.png" alt="" />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full  bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
