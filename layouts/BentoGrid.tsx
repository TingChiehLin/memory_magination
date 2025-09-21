"use client";

import Image from "next/image";

import Logo from "@/app/assets/imgs/logo.svg";
import Poster from "@/app/assets/imgs/poster.png";
import Storyboard from "@/app/assets/imgs/storyboard.png";

const BentoGrid = () => {
  return (
    <div className="py-24 sm:py-32 mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
          Explore Childhood Imagination
        </h2>
        <p className="mt-2 max-w-4xl leading-14 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
          Relive the joy of childhood memories and unlock your creativity
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-16 lg:grid-cols-6">
          <div className="flex p-px lg:col-span-2">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full object-cover object-left"
                  src="https://www.youtube.com/embed/TsTz8T4ZBEA?si=pleApxcRooyO1mSh"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">
                  Video
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Animate your imagination
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Capture, animate, and share the power of your imagination
                  through video.
                </p>
              </div>
            </div>
          </div>

          <div className="flex p-px lg:col-span-2">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <Image
                alt="Logo"
                src={Logo}
                width={500}
                height={320}
                className="h-80 w-full object-center"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">
                  Logo Design
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Imagine & Create & Inspire
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Spark childhood imagination into unforgettable memories
                </p>
              </div>
            </div>
          </div>

          <div className="flex p-px lg:col-span-2">
            <div className="w-full overflow-hidden  rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <Image
                alt="Poster"
                src={Poster}
                width={1440}
                height={1920}
                className="w-full object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">
                  Poster Design
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Visual Stories That Speak
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Transform imagination into creative posters that inspire,
                  connect, and captivate audiences
                </p>
              </div>
            </div>
          </div>

          <div className="flex p-px lg:col-span-4">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <Image
                alt="Performance"
                src={Storyboard}
                width={1420}
                height={2000}
                className="w-full object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">
                  Storyboard
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Visualize Your Imagination
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  From imagination to illustration, design storyboards that tell
                  the story of your inner child
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
