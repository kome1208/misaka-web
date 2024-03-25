import { Inter } from "next/font/google";
import "./globals.css";
import TabBar from "@/components/TabBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Misaka Web",
  description: "Misaka Web Viewer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <TabBar/>
      </body>
    </html>
  );
}
