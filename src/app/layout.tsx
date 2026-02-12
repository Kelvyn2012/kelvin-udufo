import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Kelvin Udufo | Backend Engineer",
  description: "Backend Engineer specialized in production reliability, API scalability, and high-performance systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, firaCode.variable, "font-sans antialiased bg-background text-primary")}>
        {children}
      </body>
    </html>
  );
}
