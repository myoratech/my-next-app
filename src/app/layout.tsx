import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "My Next.js App",
  description: "Next.js 15.5.4 with multiple pages and NavBar",
};

import { ReactNode } from "react";

// ...existing code...
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="p-8">{children}</div>
      </body>
    </html>
  );
}
// ...existing code...

