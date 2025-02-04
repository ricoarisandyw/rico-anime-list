import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "./components/layout/Header";
import ModalKitComponent from "./components/widget/modal-kit/ModalKit";

export const metadata: Metadata = {
  title: "Rico Anime List",
  description: "Your epic place to find your next anime with great experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto min-h-screen">
        <Header />
        {children}
        <ModalKitComponent />
      </body>
    </html>
  );
}
