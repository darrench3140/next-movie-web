import "./globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.className} mx-16 my-12`}>{children}</body>
    </html>
  );
}
