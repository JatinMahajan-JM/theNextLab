import HybridNoData from "@/components/hybridBit/hybridNoData";
import ServerNoData from "@/components/serverBit/serverNoData";

export default function Home() {
  return (
    <>
      <header className="text-center my-10">
        <h1>The NEXT.JS Lab</h1>
        <p>The Experimental Next.js App to test its Capabilities</p>
      </header>
      <HybridNoData>
        <ServerNoData />
      </HybridNoData>
    </>
  );
}
