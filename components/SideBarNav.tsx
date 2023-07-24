"use client";

import { SidebarNavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const [toggle, setToggle] = useState(false);
  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="pb-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-xl font-semibold">
            {item.title}
          </h4>
          <h5
            className="flex items-center justify-between p-2 cursor-pointer hover:text-gray-50"
            onClick={() => setToggle((prev) => !prev)}
          >
            {item.subTitle}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h5>
          {item.items && toggle ? (
            <DocsSidebarNavItems items={item.items} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

export function DocsSidebarNavItems({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={index}
            href={item.href}
            className={`flex w-full items-center rounded-md p-2 hover:underline text-lg text-gray-400 ${
              pathname.endsWith(item.href)
                ? "bg-[#060027] text-gray-100 px-4"
                : ""
            }`}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">
            {item.title}
          </span>
        )
      )}
    </div>
  ) : null;
}
