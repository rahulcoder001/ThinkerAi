import "./style.css";
import AuthProvider from "../../../(component)/AuthProvider";
import Navbar from "../../../Rootcomponent/Navbar/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body style={{backgroundColor:'black'}}>
            <Navbar />
            {children}
        </body>
      </AuthProvider>
    </html>
  );
}
