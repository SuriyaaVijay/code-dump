"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onLogin = async () => {
    try {
      await axios.post("/api/users/login", user);
      router.push(`/profile`);
    } catch (error: any) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="bg-[#1c1864] h-screen w-screen flex items-center">
      <div className="h-max mx-auto flex flex-col items-center">
        <h1 className="text-xl font-bold text-center pb-10">
          Sign in to your account
        </h1>
        <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2">
              Email
            </label>
            <input
              className="border text-black border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2">
              Password
            </label>
            <input
              className="border text-black border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="password"
              name="password"
              placeholder="******"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="flex">
            <div className="w-1/2">
              <input type="checkbox" name="remeberMe" />
              <label className="text-black ml-2">Remeber me</label>
            </div>
            <div className="w-1/2">
              <Link className="font-bold text-blue-600" href="/forgotpassword">
                Forgot password ?
              </Link>
            </div>
          </div>
          <div>
            <button
              className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
              onClick={onLogin}
            >
              {buttonDisabled ? "Login" : "Login"}
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-10">
          Don't have a profile?
          <Link href="/signup" className="text-[#4F46E5] font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
