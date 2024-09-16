"use client"; // Ensure this is at the top for Next.js client-side code

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

// Define a proper type for the children prop using ReactNode
interface AuthProviderProps {
  children: ReactNode; // ReactNode is the correct type for children
}

// AuthProvider component that wraps the children in the SessionProvider
const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
