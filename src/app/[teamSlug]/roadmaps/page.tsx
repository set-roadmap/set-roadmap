import React from "react";
import Navbar from "../_components/navbar";
import { Button } from "@/components/primitives/button";
import { BsStars } from "@/components/icons";

export default function RoadmapsPage() {
  return (
    <div className="w-full h-full bg-white border rounded-lg shadow-md">
      <Navbar>
        <h4 className="font-semibold">Roadmaps</h4>
        <Button>
          <BsStars className="h-5 w-5 mr-2" /> New Roadmap
        </Button>
      </Navbar>
    </div>
  );
}
