import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Private Homepage Concept | The Screen Doctor",
  description: "Private concept mockup homepage for The Screen Doctor of Lee County, Inc.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
