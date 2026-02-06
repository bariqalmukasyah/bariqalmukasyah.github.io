import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Bariq Al Mukasyah - IT Infrastructure Specialist",
  description: "IT Support & Infrastructure Specialist yang membantu bisnis Anda memiliki infrastruktur IT yang stabil dan efisien.",
  openGraph: {
    title: "Muhammad Bariq Al Mukasyah - IT Infrastructure Specialist",
    description: "IT Support & Infrastructure Specialist yang membantu bisnis Anda memiliki infrastruktur IT yang stabil dan efisien.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={`${inter.className} overflow-x-hidden bg-slate-50`}>
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </body>
    </html>
  );
}
