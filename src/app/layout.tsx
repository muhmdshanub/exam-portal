// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import Sidebar from "@/components/ui/Sidebar"; // Import your sidebar
// import "./globals.css";

// // Import your local fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// // Define the metadata for your application
// export const metadata: Metadata = {
//   title: "Welcome to ELT Global", // Set the title of the page
//   description: "Explore the ELT Global platform", // Set the description of the page
//   icons: {
//     icon: "./public/elt_logo.png", // Specify the path to your PNG logo in the public directory
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="overflow-x-hidden">
//       <head>
//         <link rel="icon" href="../public/elt_logo.png" type="image/png" /> {/* Link to your PNG logo */}
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[100vw] overflow-x-hidden`}
//       >
//         {/* Flexbox layout for sidebar and content */}
//         <div className="flex h-screen max-w-[100vw]">
//           <Sidebar /> {/* Left sidebar */}
//           <main className="flex-1 p-4 max-w-[100vw] overflow-x-hidden">
//             {children} {/* Main content */}
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "@/components/ui/Sidebar"; // Import your sidebar
import "./globals.css";

// Import your local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define the metadata for your application
export const metadata: Metadata = {
  title: "Welcome to ELT Global", // Set the title of the page
  description: "Explore the ELT Global platform", // Set the description of the page
  icons: {
    icon: "./public/elt_logo.png", // Specify the path to your PNG logo in the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" href="../public/elt_logo.png" type="image/png" /> {/* Link to your PNG logo */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen max-w-[100vw] overflow-hidden`}
      >
        {/* Flexbox layout for sidebar and content */}
        <div className="flex h-screen max-w-[100vw]">
          <Sidebar /> {/* Left sidebar */}
          <main className="flex-1 p-4 h-screen overflow-hidden ">
            <div className="h-full overflow-hidden"> {/* Added this wrapper for scrolling */}
              {children} {/* Main content */}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
