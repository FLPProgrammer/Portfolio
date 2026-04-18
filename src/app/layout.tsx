import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "../Components/Header/Header";
import { Footer } from '../Components/Footer/Footer';
import StyledComponentsRegistry from "./lib/registry"; //

// 🔤 DM Sans (texto padrão)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

// 🔤 Space Grotesk (títulos)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

// 🔤 Poppins (destaques / botões)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio de desenvolvedor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`
        ${dmSans.variable}
        ${spaceGrotesk.variable}
        ${poppins.variable}
        h-full antialiased
      `}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}