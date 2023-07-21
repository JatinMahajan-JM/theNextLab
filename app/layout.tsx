import "./globals.css";
import type { Metadata } from "next";
import { VT323 } from "next/font/google";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
