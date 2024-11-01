import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexcent",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-main">{children}</body>
    </html>
  );
}
