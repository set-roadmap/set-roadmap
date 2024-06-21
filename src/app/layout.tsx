import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { NextAuthProvider } from "./providers/next-auth";
import { getServerAuthSession } from "@/services/next-auth/next-auth-options";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RM",
  description:
    "AI powered modern looking roadmap builder for your product, SAAS, learning, etc",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sesison = await getServerAuthSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={sesison}>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
