import { DocsSidebarNav } from "@/components/SideBarNav";
import type { Metadata } from "next";
import { docsConfig } from "@/config/docs";

export const metadata: Metadata = {
  title: "Next Lab Docs",
  description: "The lab to test NEXT features",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="grid grid-cols-[300px_1fr]">
        <aside className="pr-6 pl-10 fixed top-7 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 md:sticky md:block lg:py-10">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </aside>
        <section className="m-20">{children}</section>
      </section>
    </>
  );
}
