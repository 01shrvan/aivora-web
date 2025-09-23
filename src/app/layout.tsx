import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aivora.com"), 
  title: {
    template: "%s | Aivora Solutions",
    default: "Aivora Solutions",
  },
  description:
    "Aivora Solutions is a leading technology company specializing in innovative AI solutions and digital transformation.",
  icons: { icon: "/favicon.ico" }, 
  openGraph: {
    type: "website",
    url: "https://aivora.com",
    images: ["/assets/opengraph-image.png"],
    description:
      "Aivora Solutions is a leading technology company specializing in innovative AI solutions and digital transformation.",
    siteName: "Aivora Solutions",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-black text-white antialiased")}>
        {children}
      </body>
    </html>
  );
}
