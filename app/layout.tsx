import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from './component/Sidebar'

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: '400'
});

export const metadata: Metadata = {
  title: "Welcome !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
