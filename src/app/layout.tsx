import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevThink.AI Newsletter Archive",
  description: "A comprehensive archive of DevThink.AI newsletter articles covering AI development, tools, and insights for software developers.",
  keywords: ["AI", "Artificial Intelligence", "Development", "Programming", "Newsletter", "DevThink.AI", "Machine Learning"],
  authors: [{ name: "Sam Keen" }],
  creator: "DevThink.AI",
  openGraph: {
    title: "DevThink.AI Newsletter Archive",
    description: "A comprehensive archive of DevThink.AI newsletter articles covering AI development, tools, and insights for software developers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevThink.AI Newsletter Archive",
    description: "A comprehensive archive of DevThink.AI newsletter articles covering AI development, tools, and insights for software developers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
