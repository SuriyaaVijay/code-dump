"use client";
import axios from "axios";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const checkEmail = async () => {
    try {
      await axios.post("/api/users/forgotpasswordtoken", { email });
    } catch (error: any) {
      return console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
          Forgot Password
        </h1>

        <form>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <button
            onClick={checkEmail}
            className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
