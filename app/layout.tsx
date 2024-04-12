import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
import TopNav from "@/components/TopNav"


export const metadata: Metadata = {
  title: "Renecom",
  description: "Ecommerce App Using NextJS Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <TopNav/>
        {children}
        </body>
    </html>
  );
}
