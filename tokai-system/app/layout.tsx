import type { Metadata } from "next";
import { Zen_Maru_Gothic, Geist_Mono } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社東海システム | 名古屋のシステム開発・インフラ・SES",
  description:
    "株式会社東海システムは、名古屋・名駅を拠点に業務システム開発・ITインフラ構築・SESを提供しています。製造・物流の現場が止まらない仕組みをつくります。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenMaruGothic.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
