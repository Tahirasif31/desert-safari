"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 flex flex-col items-center">
        <Image
          src={`/mat-3.jpg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain lg:max-w-[350px] text-center flex items-center rounded-md "
        />
        <p className="text-base sm:text-xl text-neutral-200 mt-3">
          Book Best Desert Supari Tour Now!
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
          Experience the thrill of the desert with our premier Desert Safari
          tours &mdash; book now for an unforgettable adventure under the golden
          Arabian skies!
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <a href="https://chatwith.io/s/city-tours-and-deset-safari">
            <span>Book now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              AED 150
            </span>
          </a>
        </button>
      </BackgroundGradient>
    </div>
  );
}
