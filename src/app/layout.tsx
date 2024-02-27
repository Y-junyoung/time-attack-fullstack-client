import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Udemy 풀스택 타임어택",
  description: "Udemy Fullstack TimeAttack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
