"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface NextAuthProviderProps {
  session?: Session | null;
  children: React.ReactNode;
}

export const NextAuthProvider = ({
  session,
  children,
}: NextAuthProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
