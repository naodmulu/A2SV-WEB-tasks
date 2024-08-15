import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./Provider/AuthProvider";
import NavBar from "./components/clientSide/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sera Felagi",
  description: "where jobs and employe meet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar/>
          <main>
            {children}
          </main>
        </AuthProvider>
        </body>
    </html>
  );
}
