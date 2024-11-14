import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "700"], // specify weights as needed
  subsets: ["latin"], // choose subsets to include, like 'latin', 'latin-ext'
});

export const metadata: Metadata = {
  title: "Kaique Ferraz de Jesus",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background ${montserrat.className} dark`}>
        <main className="flex flex-col w-full bg-primary-background">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
