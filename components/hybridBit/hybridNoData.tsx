"use client";

import ClientNoData from "@/components/clientBit/clientNoData";
import React, { useState, Profiler } from "react";

interface Props {
  children: React.ReactNode;
}

export default function HybridNoData({ children }: Props) {
  const [serverBitTime, setServerTime] = useState(0);
  const [clientBitTime, setClientTime] = useState(0);

  const onRenderCallback = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number
  ) => {
    // console.log("Component ID:", id);
    console.log("Actual duration (ms):", actualDuration);
    // console.log("phase: " + phase);
    // console.log("baseDuration: " + baseDuration);
    // console.log("-------------------------------");
    if (phase === "mount") {
      if (id === "ClientComponent")
        setClientTime((prev) => prev + actualDuration);
      if (id === "ServerComponent")
        setServerTime((prev) => prev + actualDuration);
    }
  };

  return (
    <div className="flex flex-col gap-10 mt-28 w-1/3 mx-auto ">
      <div>
        <h2 className="mb-8">
          Mount Time: Server Component vs Client Component
        </h2>
        <p>Client Component: {clientBitTime.toFixed(10)} ms</p>
        <p>Server Component: {serverBitTime.toFixed(2)} ms</p>
      </div>
      <section className="flex items-center justify-between gap-20 ">
        <Profiler id="ServerComponent" onRender={onRenderCallback}>
          {children}
        </Profiler>
        <Profiler id="ClientComponent" onRender={onRenderCallback}>
          <ClientNoData />
        </Profiler>
      </section>
    </div>
  );
}
