import { Geist_Mono, Montserrat } from "next/font/google";
import { Providers } from "./provider";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Тарифы — Мой Сайт",
  description: "Описание страницы с тарифами, актуальные цены и условия.",
  keywords: "тарифы, планы, подписка, цены",
  authors: [{ name: "Sardar", url: "https://example.com" }],
  openGraph: {
    title: "Тарифы — Мой Сайт",
    description: "Описание страницы с тарифами, актуальные цены и условия.",
    url: "https://example.com/tariffs",
    siteName: "Мой Сайт",
    images: [
      {
        url: "/musc.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Тарифы — Мой Сайт",
    description: "Описание страницы с тарифами, актуальные цены и условия.",
    images: ["/musc.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
