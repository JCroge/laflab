import type { Metadata } from "next";
import { Inter, Space_Grotesk, Noto_Sans_SC } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "拉菲实验室（LF Labs）人工智能孵化集团",
  description:
    "LF Labs 专注 AI 项目孵化、产业创新与资本协同，构建面向未来的科技创新生态。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className={`${inter.variable} ${grotesk.variable} ${notoSans.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
