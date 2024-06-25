import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/primitives/accordion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/primitives/avatar";
import { headingFont } from "@/lib/heading-font";
import { cn } from "@/lib/utils";
import { FaExchangeAlt, FaSuperpowers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { LuBarChartHorizontalBig } from "react-icons/lu";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { RiArchiveStackFill } from "react-icons/ri";
import { SlDirections } from "react-icons/sl";

export default function Sidebar() {
  return (
    <div className="h-full w-72 sticky top-0 shrink-0">
      <div className="pb-4 pt-6 h-full flex flex-col justify-between">
        <div className="pl-4 py-2 space-y-8">
          <h2
            className={cn(
              "mb-2 px-2 text-2xl font-bold tracking-wide flex items-center",
              headingFont.className
            )}>
            <FaSuperpowers className="h-7 w-7 mr-2" /> PonyMap
          </h2>
          <div className="space-y-2">
            <div className="w-full px-2 py-2.5 rounded-lg flex items-center gap-2 hover:bg-muted-foreground/15 hover:cursor-pointer">
              <MdOutlineRadioButtonChecked className="h-6 w-6" />
              Get Started
            </div>
            <div className="w-full px-2 py-2.5 bg-muted-foreground/15 rounded-lg flex items-center gap-2 hover:bg-muted-foreground/15 hover:cursor-pointer">
              <SlDirections className="h-6 w-6" />
              Roadmaps
            </div>
            <div className="w-full px-2 py-2.5 rounded-lg flex items-center gap-2 hover:bg-muted-foreground/15 hover:cursor-pointer">
              <LiaUserFriendsSolid className="h-6 w-6" />
              Team
            </div>

            <Accordion type="single" collapsible>
              <AccordionItem value="Insights">
                <AccordionTrigger className="w-full px-2 py-2.5 rounded-lg hover:bg-muted-foreground/15 hover:cursor-pointer">
                  <div className="flex items-center gap-2">
                    <LuBarChartHorizontalBig className="h-6 w-6" />
                    Insights
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-2 px-4 py-2">
                  <div className="w-full px-2 py-2.5 rounded-lg flex items-center gap-2 hover:bg-muted-foreground/15 hover:cursor-pointer">
                    <RiArchiveStackFill className="h-6 w-6" />
                    Posts
                  </div>
                  <div className="w-full px-2 py-2.5 rounded-lg flex items-center gap-2 hover:bg-muted-foreground/15 hover:cursor-pointer">
                    <FaExchangeAlt className="h-6 w-6" />
                    Changelogs
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="w-full px-2 py-2.5 rounded-lg flex items-center gap-2 hover:bg-muted-foreground/15 hover:cursor-pointer">
              <IoSettingsOutline className="h-6 w-6" />
              Settings
            </div>
          </div>
        </div>

        <div className="pl-4">
          <div className="w-full px-2 py-1.5 rounded-lg flex items-center gap-2 hover:bg-muted-foreground/15 hover:cursor-pointer">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Aashish Upadhyay
          </div>
        </div>
      </div>
    </div>
  );
}
