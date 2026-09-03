import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zannat PTY LTD",
  description: "Developed by Neuvix",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${afacad.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}