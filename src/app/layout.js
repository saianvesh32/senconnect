// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: {
//     default:"Next.js 14 Homepage",
//     template:"%s | Next.js 14"
//   },
//   description: "Next.js starter app description",
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//       <script src="https://cdn.tailwindcss.com"></script>
//       </head>
//       <body className={inter.className}>
//         <div className="container">
//         <Navbar/>
//         {children} 
//         <Footer/>
//         </div>
       
//         </body>
//     </html>
//   );
// }
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { SessionProvider } from "next-auth/react";  // Import SessionProvider

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
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={inter.className}>
        <SessionProvider>  {/* Wrap everything inside SessionProvider */}
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
