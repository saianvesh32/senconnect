
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Script from "next/script";
// import { SessionProvider } from "next-auth/react";  // Import SessionProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next.js 14 Homepage",
    template: "%s | Next.js 14",
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        {/* <SessionProvider>  Wrap everything inside SessionProvider */}
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
