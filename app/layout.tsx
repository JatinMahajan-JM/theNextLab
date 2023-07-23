import { DocsSidebarNav } from "@/components/SideBarNav";
import "./globals.css";
import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import { docsConfig } from "@/config/docs";

const inter = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Lab",
  description: "The lab to test NEXT features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " grid grid-cols-[280px_1fr]"}>
        <aside className="pr-6 pl-10 fixed top-7 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 md:sticky md:block lg:py-10">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </aside>
        <section className="ml-20">{children}</section>
      </body>
    </html>
  );
}
