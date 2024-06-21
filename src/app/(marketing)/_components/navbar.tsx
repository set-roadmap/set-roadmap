import localFont from "next/font/local";
import { Button } from "@/components/primitives/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FiGithub } from "react-icons/fi";

const headingFont = localFont({
  src: "../../../../public/font/cal-semibold-font.woff2",
});

export function Navbar() {
  return (
    <div className="mx-auto max-w-[64rem] flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <h1 className={cn("text-3xl", headingFont.className)}>RM</h1>

        <ul className="flex items-center px-8 gap-8 text-neutral-500 text-sm h-10 border border-neutral-300 rounded-full">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <Button size={"sm"} variant={"ghost"} className="rounded-full">
            <FiGithub size={18} color="black" />
            <span className="ml-2">8.2k</span>
          </Button>
        </ul>

        <div className="flex gap-4">
          <Button size={"sm"} className="rounded-full" asChild>
            <Link href="/signin">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
