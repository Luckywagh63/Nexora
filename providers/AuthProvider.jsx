"use client"; // <-- this makes it a Client Component

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
