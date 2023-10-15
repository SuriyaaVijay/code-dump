"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface UserData {
  username: string;
  _id: string;
}

export default function UserProfile({ params }: any) {
  const router = useRouter();
  const [data, setData] =  useState<UserData | null>(null);

  const getProfileData = async () => {
    try {
      const res = await axios.get("/api/users/me");
      const userId = res?.data.user;
      setData(userId);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const verifyEmail = async () => {
    try {
      await axios.post(`/api/users/verifyemailmessage`, { id: data?._id });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {data && (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
          <div className="h-screen w-full absolute flex items-center justify-center ">
            <div className="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center overflow-y-scroll">
              <div className="mb-4">
                <h1 className="text-black pt-3 pb-3 rounded-md font-semibold hover:font-bold text-3xl bg-cyan-400">
                  {data.username}
                </h1>
              </div>
              <div className="mb-8">
                <p className="text-black">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
                  quidem?
                </p>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={logout}
                  className="group relative mr-2 h-9 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                >
                  <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Logout
                  </span>
                </button>
                <button
                  onClick={verifyEmail}
                  className="group relative h-9 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                >
                  <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Verify Email
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
