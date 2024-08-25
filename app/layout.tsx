import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {} from '@clerk/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note Chatbot",
  description: "It's AI integrated notes chatbot application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{variables: {colorPrimary:"#0F170A"}}}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
