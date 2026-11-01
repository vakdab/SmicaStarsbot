import React from "react";

const Loading = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto p-6">
      <div className="h-40 w-full rounded-lg bg-gradient-to-b from-emerald-800 to-neutral-900 animate-pulse" />
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square w-full rounded-md bg-neutral-800 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
