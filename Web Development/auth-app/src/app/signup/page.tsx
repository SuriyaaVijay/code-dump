"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSignUp = async () => {
    try {
      await axios.post("/api/users/signup", user);
      router.push("/login");
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="bg-[#1c1864] h-screen w-screen flex items-center">
      <div className="h-max mx-auto flex flex-col items-center">
        <h1 className="text-xl font-bold text-center pb-10">
          Sign up for your account
        </h1>
        <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2">
              Username
            </label>
            <input
              className="border text-black border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="text"
              name="username"
              placeholder="anything"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
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
              placeholder="********"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div>
            <button
              className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
              onClick={onSignUp}
            >
              {buttonDisabled ? "Sign Up" : "Sign Up"}
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-10">
          Do you have a profile?
          <Link href="/login" className="text-[#4F46E5] font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
