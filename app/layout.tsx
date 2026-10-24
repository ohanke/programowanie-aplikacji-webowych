import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "./components/NavigationBar";
import { ApplicationFooter } from "./components/ApplicationFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie Library | Kinoteka Filmowa",
  description: "Nowoczesna biblioteka i katalog filmowy SPA",
};

interface RootLayoutProperties {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <NavigationBar />
        <div className="flex-1">
          {children}
        </div>
        <ApplicationFooter />
      </body>
    </html>
  );
}
