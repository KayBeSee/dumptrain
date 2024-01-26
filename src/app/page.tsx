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

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LoadingDump = () => (
  <div className="animate-pulse flex flex-1 mx-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="fill-white ml-auto w-10 h-10"
    >
      <path d="m17.057 13.303c-.077-.044-.157-.087-.239-.129.955-.749 1.181-1.568 1.181-2.174 0-1.419-1.193-2.655-3.175-3.409.115-.351.175-.72.175-1.091 0-1.93-1.57-3.5-3.5-3.5-.684 0-1.5-.173-1.5-1 0-.453.578-.948.779-1.085.183-.123.264-.35.2-.561s-.258-.354-.478-.354c-1.567 0-3.178.515-4.418 1.413-.633.458-1.135.988-1.493 1.575-.391.641-.589 1.318-.589 2.012 0 .288.024.574.07.855-.849.41-1.566.951-2.09 1.581-.641.77-.98 1.657-.98 2.564 0 .546.123 1.103.356 1.641-.888.854-1.356 1.836-1.356 2.859 0 1.525 1.028 2.936 2.893 3.973 1.773.985 4.119 1.527 6.607 1.527 2.558 0 4.879-.333 6.535-.937 2.45-.893 2.965-2.159 2.965-3.063 0-.728-.337-1.787-1.943-2.697zm-1.364 4.821c-1.55.565-3.749.876-6.193.876-2.32 0-4.494-.498-6.121-1.402-1.534-.852-2.379-1.953-2.379-3.098 0-.797.41-1.461.867-1.952.115.164.24.324.377.479.796.909 1.904 1.603 3.118 1.953.046.013.093.02.139.02.217 0 .417-.142.48-.361.077-.265-.076-.542-.342-.619-2.074-.599-3.639-2.327-3.639-4.02 0-1.224.88-2.399 2.329-3.155.524 1.443 1.63 2.641 3.004 3.127.055.019.111.029.167.029.206 0 .399-.128.471-.333.092-.26-.044-.546-.305-.638-1.52-.537-2.667-2.269-2.667-4.029 0-1.012.592-1.998 1.668-2.777.744-.538 1.643-.918 2.578-1.1-.144.258-.246.554-.246.877 0 .967.657 2 2.5 2 1.378 0 2.5 1.122 2.5 2.5 0 .271-.042.533-.125.784-.408-.111-.841-.204-1.295-.277-.273-.044-.529.142-.573.414s.142.529.414.573c1.387.223 2.563.647 3.401 1.226.538.372 1.179.982 1.179 1.78 0 .645-.428 1.218-1.273 1.705-.915-.325-1.986-.564-3.169-.702-.274-.032-.523.164-.555.439s.164.523.439.555c1.686.197 3.112.604 4.122 1.176.655.371 1.436.989 1.436 1.827 0 1.06-1.255 1.74-2.307 2.124z" />
    </svg>
  </div>
);

const LoadingTrain = () => (
  <div className="animate-pulse flex flex-1 mx-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-train-front w-12 h-12"
    >
      <path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
      <path d="m9 15-1-1" />
      <path d="m15 15 1-1" />
      <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
      <path d="m8 19-2 3" />
      <path d="m16 19 2 3" />
    </svg>
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
    <div className="bg-gradient-to-br from-[#0F1822] from-0% via-[#31414F] via-80% to-[#EDBF5A] to-100% sm:py-32 h-dvh flex items-center">
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
          {isLoading ? (
            <dl className="my-32 grid max-w-xl grid-cols-4 gap-y-10 lg:max-w-none lg:gap-y-16 lg:my-6">
              <div className="relative col-span-2">
                <dd className="mt-3 leading-7 text-gray-200 text-lg font-semibold text-center">
                  <LoadingDump />
                </dd>
              </div>
              <div className="relative col-span-2">
                <dd className="mt-2 leading-7 text-white text-4xl font-semibold text-center">
                  <LoadingTrain />
                </dd>
              </div>
            </dl>
          ) : (
            <dl className="mt-1 grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-5 lg:gap-y-16">
              <div className="relative col-span-2">
                <dd className="mt-2 leading-7 text-white text-4xl font-semibold text-center">
                  {current?.gametype}
                </dd>
              </div>
              <div className="relative col-span-1">
                <dd className="mt-2 leading-7 text-gray-200 text-lg font-semibold text-center">
                  on
                </dd>
              </div>
              <div className="relative col-span-2">
                <dd className="mt-2 leading-7 text-white text-4xl font-semibold text-center">
                  {current?.map}
                </dd>
              </div>
            </dl>
          )}
        </div>
        <div
          className={classNames(
            isLoading ? "lg:mt-14" : "lg:mt-18",
            "mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl w-full text-center"
          )}
        >
          <button
            type="button"
            className="mx-auto rounded-md bg-[#F9D97A] px-7 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-[#FBE4A1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={async () => {
              if (!isLoading) {
                console.log("runs");
                setIsLoading(true);
                await sleep(4000);
                const option = getRandomOption(options);
                setCurrent(option);
                setIsLoading(false);
              }
              // setIsLoading(!isLoading);
            }}
          >
            Pick Game
          </button>
        </div>
      </div>
    </div>
  );
}
