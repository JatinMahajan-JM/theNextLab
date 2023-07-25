"use client";

import Link from "next/link";
import { useState } from "react";

const handleClick = async () => {
  await fetch("/api/cookies", { method: "POST" });
};

export default function Cookies() {
  const [cookie, setCookie] = useState<{ name: string; value: string }>();
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
      {cookie?.value}

      <p>Features used: </p>
      <p>
        {`
          1. cookies() -> The cookies().set() method in route handler can only be called by client component. Calling from a server component will not set the cookie in browser`}
      </p>
      <p>2. Route Handlers</p>
      <p>
        3. When using cookies our route handlers will be evaluated dynamically
      </p>
      <p>4. Middleware</p>
      <Link href="/about" className="w-fit outline-dotted p-2">
        Go to /about
      </Link>
      <p>
        When navigating to /about the middleware is invoked and it redirect you
        to the /docs page
      </p>
      <p>
        We can directly respond from the middlware e.g. if the authentication
        failed, we can redirect to login
      </p>
    </>
  );
}
