"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState();

  const getProfileData = async () => {
    try {
      const res = await axios.get("/api/users/me");
      const userId = res?.data.user._id;
      setData(userId);
      await router.push(`/profile/${userId}`);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-black min-w-screen">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
}
