import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "My Next.js App",
  description: "Next.js 15.5.4 with theme colors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-600 text-green-500 min-h-screen">
        <NavBar />
        <div className="p-8">{children}</div>
      </body>
    </html>
  );
}
