import { cn } from "@/lib/utils";
import { headingFont } from "@/lib/heading-font";
import Link from "next/link";
import { Button } from "@/components/primitives/button";

export default function MarketingPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={cn(
          "flex flex-col justify-center items-center tracking-wider",
          headingFont.className
        )}>
        <h1 className="text-3xl md:text-6xl text-center mb-3 text-neutral-400">
          The #1
        </h1>
        <h1 className="text-3xl md:text-6xl text-center mb-3 text-neutral-800">
          Open-Source
        </h1>
        <h1 className="text-3xl md:text-6xl text-center mb-3 text-neutral-800">
          AI-powered Roadmap Builder
        </h1>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-500 mt-4 max-w-xs md:max-w-2xl text-center mx-auto"
        )}>
        AI Strategy Builder accelerates your project journey. Streamline
        Strategy, Accelerate Progress, and Achieve Milestones with Intelligent
        Roadmapping
      </div>

      <Button
        size={"lg"}
        className="rounded-full mt-6 shadow-[-8px_8px_0px_rgba(0,0,0,0.15)]"
        asChild>
        <Link href="/signin">Get started for free</Link>
      </Button>
    </div>
  );
}
