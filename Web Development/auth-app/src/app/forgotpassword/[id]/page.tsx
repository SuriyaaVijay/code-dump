"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ForgotPassword() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);

  const checkPassword = async () => {
    try {
      await axios.post("/api/users/forgotpassword", { token, password });
    } catch (error: any) {
      setError(true);
      return console.log(error);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
          Forgot Password
        </h1>

        <form>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600">New Password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <button
            onClick={checkPassword}
            className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
