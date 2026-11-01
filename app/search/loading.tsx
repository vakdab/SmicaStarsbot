import React from "react";

const Loading = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto p-6">
      <div className="h-32 w-full rounded-lg bg-gradient-to-b from-emerald-800 to-neutral-900 animate-pulse" />
      <div className="mt-6 flex flex-col gap-y-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-14 w-full rounded-md bg-neutral-800 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
