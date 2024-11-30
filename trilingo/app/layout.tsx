import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trilingo",
  description: "A Duolingo-ish Thing",
  icons: {
    icon: "mascot.svg", 
    shortcut: "mascot.svg", 
    apple: "mascot.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={nunito.className}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
