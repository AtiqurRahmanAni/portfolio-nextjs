import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Atiqur Rahman",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-screen-xl mx-auto p-4">
        <NavBar />
        <main className="flex sm:flex-row flex-col gap-10">
          <SideBar />
          {children}
        </main>
      </body>
    </html>
  );
}
