import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Nav from "./_components/nav";
import './globals.css';
import Image from "next/image";
import PaperImg from '@/app/static/paper.png'
import { nothingYouCouldDo } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nothingYouCouldDo.variable}`}>
      <body className="bdg-[#e5ded1] bg-grid-paper text-black min-h-screen flex flex-col relative">
        <Image alt="" className="absolute inset-0 object-cover w-full h-full opacity-30 pointer-events-none" src={PaperImg}/>
        <Nav />
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
