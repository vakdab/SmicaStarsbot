"use client";

import React from "react";
import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ onChange, value = 1 }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.01}
      aria-label="Volume"
      className="relative flex items-center select-none touch-none w-full h-10 group"
    >
      <RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
        <RadixSlider.Range className="absolute bg-white rounded-full h-full" />
      </RadixSlider.Track>
      <RadixSlider.Thumb className="block h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition focus:outline-none focus:opacity-100 drop-shadow" />
    </RadixSlider.Root>
  );
};

export default Slider;
