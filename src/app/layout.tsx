import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

import { getImages } from "@/lib/getImages";

export async function generateMetadata(): Promise<Metadata> {
  const dbImages = await getImages();
  
  return {
    title: "DentaClinic - Ağız ve Diş Sağlığı Polikliniği",
    description: "Modern teknoloji ve uzman kadromuzla ağız ve diş sağlığınız için en iyi hizmeti sunuyoruz. İmplant, ortodonti, estetik diş hekimliği ve daha fazlası.",
    icons: dbImages.favicon ? { icon: dbImages.favicon } : undefined,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
