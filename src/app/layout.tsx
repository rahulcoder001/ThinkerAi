import type { Metadata } from "next";
import { Roboto_Mono as RobotoMonoFont } from "next/font/google";
import "../app/globals.css";

// Use the renamed constant
const robotoMono = RobotoMonoFont({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--roboto-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
