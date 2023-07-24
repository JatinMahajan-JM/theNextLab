"use client";

import { useState } from "react";

const handleClick = async () => {
  await fetch("/api/cookies", { method: "POST" });
};

export default function Cookies() {
  const [cookie, setCookie] = useState(null);
  const getCookie = async () => {
    setCookie(
      (await fetch("/api/cookies").then((res) => res.json())) as {
        name: string;
        value: string;
      }
    );
  };
  console.log(cookie);
  return (
    <>
      <button
        onClick={handleClick}
        className="w-fit bg-[#060027] p-2 text-gray-500 hover:text-gray-300"
      >
        Click me to set Chocolate Cookie
      </button>
      <button
        onClick={getCookie}
        className="w-fit bg-[#060027] p-2 text-gray-500 hover:text-gray-300"
      >
        Click me to get Cookie
      </button>
      {"Here is your Cookie: "}
      {cookie.value}
    </>
  );
}
