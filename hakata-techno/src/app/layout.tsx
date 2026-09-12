import type { Metadata } from "next";
import "./common.css";
import "./pages.css";
import "./index.css";
import "./site.css";

export const metadata: Metadata = {
  title: "株式会社博多テクノ | HAKATA TECHNO",
  description:
    "株式会社博多テクノの採用情報。採用フロー・福利厚生をご紹介します。博多から世界へ、あなたのエンジニアキャリアを最高のものに。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Archivo:wght@500..900&family=Noto+Sans+JP:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
