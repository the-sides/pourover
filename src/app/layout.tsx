import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Nav from "./_components/nav";
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[rgb(37,35,32)] text-white min-h-screen flex flex-col">
        <Nav />
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
