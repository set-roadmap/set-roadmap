"use client";

import { Button } from "@/components/primitives/button";
import { headingFont } from "@/lib/heading-font";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function SignInPage() {
  const handleSignInWithGoogle = async () => {
    await signIn("google", { callbackUrl: "/home" });
  };

  return (
    <div className="h-full text-center flex flex-col items-center mt-24 space-y-10">
      <Link href="/" className={cn("text-3xl", headingFont.className)}>
        Roadmap
      </Link>
      <div className="space-y-3">
        <h3 className={cn("text-xl", headingFont.className)}>Welcome back!</h3>
        <p className="text-sm text-neutral-500">Your AI roadmap builder</p>
        <Button onClick={handleSignInWithGoogle}>
          <FaGoogle size={18} className="mr-2" /> Sign in with Google
        </Button>
      </div>
      <div className="max-w-[16rem] text-sm text-neutral-500">
        By clicking continue, you agree to our <u>Terms of Service</u> and{" "}
        <u>Privacy Policy</u>.
      </div>
    </div>
  );
}
