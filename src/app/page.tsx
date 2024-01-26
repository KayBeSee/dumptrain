"use client";

import { useState } from "react";

function getRandomOption(options: Option[]): Option | null {
  if (options.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Loading = () => (
  <div className="animate-pulse flex flex-1">
    <div className="rounded-full bg-slate-500 h-9 w-full"></div>
  </div>
);

type Gametype =
  | "Team Slayer"
  | "Capture the Flag"
  | "King of the Hill"
  | "Oddball";

type Map =
  | "Guardian"
  | "Narrows"
  | "The Pit"
  | "Construct"
  | "Heretic"
  | "Amplified"
  | "Onslaught";

interface Option {
  gametype: Gametype;
  map: Map;
}

const options: Option[] = [
  { gametype: "Team Slayer", map: "Amplified" },
  { gametype: "Team Slayer", map: "Construct" },
  { gametype: "Team Slayer", map: "Narrows" },
  { gametype: "Team Slayer", map: "The Pit" },
  { gametype: "Oddball", map: "Guardian" },
  { gametype: "King of the Hill", map: "Construct" },
  { gametype: "Capture the Flag", map: "Onslaught" },
  { gametype: "Capture the Flag", map: "Heretic" },
  { gametype: "Capture the Flag", map: "Narrows" },
  { gametype: "Capture the Flag", map: "The Pit" },
];

export default function Home() {
  const [current, setCurrent] = useState(getRandomOption(options));
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="py-24 bg-gradient-to-br from-[#0F1822] from-0% via-[#31414F] via-80% to-[#EDBF5A] to-100% sm:py-32 h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#9DC656]">
            Halo 3
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Dump Train
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            Do you want dump, or you want train?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-8 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-5 lg:gap-y-16">
            <div className="relative col-span-2">
              <dd className="mt-2 leading-7 text-white text-4xl font-semibold text-center">
                {isLoading ? <Loading /> : current?.gametype}
              </dd>
            </div>
            <div className="relative col-span-1">
              <dd className="mt-2 leading-7 text-gray-200 text-lg font-semibold text-center">
                on
              </dd>
            </div>

            <div className="relative col-span-2">
              <dd className="mt-2 leading-7 text-white text-4xl font-semibold text-center">
                {isLoading ? <Loading /> : current?.map}
              </dd>
            </div>
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl w-full text-center">
          <button
            type="button"
            className="mx-auto rounded-md bg-[#F9D97A] px-7 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-[#FBE4A1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={async () => {
              if (!isLoading) {
                console.log("runs");
                setIsLoading(true);
                await sleep(5000);
                const option = getRandomOption(options);
                setCurrent(option);
                setIsLoading(false);
              }
            }}
          >
            Pick Game
          </button>
        </div>
      </div>
    </div>
  );
}
