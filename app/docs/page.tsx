import HybridNoData from "@/components/hybridBit/hybridNoData";
import ServerNoData from "@/components/serverBit/serverNoData";

export default function Docs() {
  return (
    <>
      <header className=" h-[20vh]">
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
