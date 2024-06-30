import { Button } from "@/components/primitives/button";
import { headingFont } from "@/lib/heading-font";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="space-y-8 text-center">
      <h3
        className={cn(
          "text-5xl font-bold tracking-wide",
          headingFont.className
        )}>
        Welcome to PonyMap
      </h3>
      <p className="w-[30rem] text-lg ">
        PonyMap gives you the power to create personalized roadmaps and gives
        you the all the tracking metrics.
      </p>
      <Button size={"lg"} asChild>
        <Link href="/welcome/create-team">Get Started</Link>
      </Button>
    </div>
  );
}
