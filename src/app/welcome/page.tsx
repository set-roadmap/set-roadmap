import { Button } from "@/components/primitives/button";
import { headingFont } from "@/lib/heading-font";
import { cn } from "@/lib/utils";

export default function WelcomePage() {
  return (
    <div className="h-full w-full flex flex-col gap-8 items-center justify-center">
      <h3
        className={cn(
          "text-5xl font-bold tracking-wide",
          headingFont.className
        )}>
        Welcome to PonyMap
      </h3>
      <p className="w-[28rem] text-center text-lg ">
        PonyMap gives you the power to create personalized roadmaps and gives
        you the all the tracking metrics.
      </p>
      <Button size={"lg"}>Get Started</Button>
    </div>
  );
}
