import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mother Revival",
  description: "You are not broken. You are between. Understand what happened to your identity after motherhood — and find your way through.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
