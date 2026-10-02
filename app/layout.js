import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Form Request",
  description: "Sistem Permintaan & Pengembangan Aplikasi TI ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}