import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";

import { getSongsByUserId } from "@/lib/songs";
import { getActiveProductsWithPrices } from "@/lib/products";

import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

import "./globals.css";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "SmicaStars",
  description: "SmicaStars — music player interface built with Next.js & Tailwind."
};

export const revalidate = 0;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const userSongs = getSongsByUserId();
  const products = getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <ModalProvider products={products} />
        <Sidebar songs={userSongs}>{children}</Sidebar>
        <Player />
      </body>
    </html>
  );
}
