import LinkedInProvider from "next-auth/providers/linkedin";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt"; 
import { Session } from "next-auth";  

export const options = {
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID || "", 
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "",
      profile(profile) {
        console.log("Profile linkedin", profile);
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
         
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "", 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", 
      profile(profile) {
        console.log("Profile Google", profile);
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
        };
      },
    }),
  ],
  callbacks: {
   
    async jwt({ token, user }: { token: JWT, user?: any }) {  
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        
      }
      return token;
    },
    
   
    async session({ session, token }: { session: Session, token: JWT }) {  // Explicitly type session and token
        if (session.user) {
            session.user.name = token.name || null;
            session.user.email = token.email || null;
            
        }
      return session;
    },
  },
};
