import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "よりどころ | ひとりで抱えない。気持ちを置ける場所。",
  description:
    "よりどころは、気持ちを言葉にして置いていけるコミュニティアプリです。ルームとスレッドで、今の感覚を静かに共有できます。",
  metadataBase: new URL("https://yoridokoro.blog"),
  openGraph: {
    title: "よりどころ",
    description: "ひとりで抱えない。気持ちを置ける場所。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "よりどころ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "よりどころ",
    description: "ひとりで抱えない。気持ちを置ける場所。",
    images: ["/ogp.png"],
  },
  verification: {
    google: "D0lFdYlr8kJLTCuEdcSh6aXHMyfHzaGee6v1jkngdWo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
