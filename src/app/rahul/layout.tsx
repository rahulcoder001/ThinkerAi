import "./style.css";
import AuthProvider from "../../../(component)/AuthProvider";
import Navbar from "@/pages/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
            <Navbar />
            {children}
        </body>
      </AuthProvider>
    </html>
  );
}
