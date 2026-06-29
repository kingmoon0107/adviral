import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ad.viral | 애드바이럴 광고판",
  description:
    "칸당 1,000원! 20×20 그리드 광고판에서 당신의 브랜드를 알리세요. 소상공인·스타트업을 위한 초저가 디지털 광고 플랫폼.",
  keywords: ["광고", "광고판", "애드바이럴", "adviral", "소상공인 광고", "저렴한 광고"],
  openGraph: {
    title: "ad.viral | 애드바이럴 광고판",
    description: "칸당 1,000원! 20×20 디지털 광고판에 브랜드를 게시하세요.",
    siteName: "ad.viral",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
