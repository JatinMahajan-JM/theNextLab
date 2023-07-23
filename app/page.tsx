import HybridNoData from "@/components/hybridBit/hybridNoData";
import ServerNoData from "@/components/serverBit/serverNoData";

export default function Home() {
  return (
    <>
      <header className=" h-[20vh] grid items-end">
        <div>
          <h1>The NEXT.JS Lab</h1>
          <p>The Experimental Next.js App to test its Capabilities</p>
        </div>
      </header>
      <HybridNoData>
        <ServerNoData />
      </HybridNoData>
    </>
  );
}
