"use client";

import React from "react";
import Button from "@/components/Button";

const Error = ({ reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full flex flex-col items-center justify-center gap-y-4">
      <p className="text-white text-xl font-semibold">Search failed.</p>
      <div className="w-[200px]">
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
};

export default Error;
