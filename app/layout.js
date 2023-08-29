import "../styles/globals.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Metaversus",
  description: "Choose your Metaverse",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={oswald.className}>{children}</body>
  </html>
);

export default RootLayout;
