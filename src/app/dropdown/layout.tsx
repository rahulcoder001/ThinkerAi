import { Navbar } from "../../pages/Navbar/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="roboto_mono">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
