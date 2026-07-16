import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Identidade Magra | Dra. Gabriela Meira",
  description: "Emagrecimento feminino baseado em evidências em Parauapebas e atendimento online.",
  icons: { icon: "/identidade-magra-logo.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const fonts = {
    "--serif": '"Cormorant Garamond", "Bodoni MT", Georgia, serif',
    "--sans": 'Manrope, "Segoe UI", Arial, sans-serif',
  } as React.CSSProperties;
  return <html lang="pt-BR"><body style={fonts}>{children}</body></html>;
}
