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
  description:
    "Portfolio created as a showcase about me, my projects and my career",
  icons: {
    icon: [
      { rel: "icon", url: "/images/favicon/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", url: "/images/favicon/favicon-32x32.png", sizes: "32x32" },
      {
        rel: "icon",
        url: "/images/favicon/favicon-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/images/favicon/favicon-512x512.png",
        sizes: "512x512",
      },
    ],
  },
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
