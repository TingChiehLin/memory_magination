"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "@/app/assets/imgs/logo.svg";

type NavItem = { name: string; href: string };
type Props = { navigation?: NavItem[] };

const navItems = [
  { name: "Home", href: "hero" },
  { name: "About", href: "bento" },
];

const handleScrollTo = (id: string, duration = 1500) => {
  const element = document.getElementById(id);
  if (!element) return;

  const start = window.scrollY;
  const end = element.offsetTop;
  const distance = end - start;
  let startTime: number | null = null;

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

export default function NavBar({ navigation = navItems }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav aria-label="Global" className="flex items-center justify-between">
      <div className="flex lg:flex-1">
        <a
          href="https://github.com/TingChiehLin/magination"
          target="_blank"
          rel="noopener noreferrer"
          className="-m-1.5 p-1.5"
        >
          <span className="sr-only">imagination</span>
          <Image
            src={Logo}
            alt="logo"
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </a>
      </div>

      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => handleScrollTo(item.href, 750)}
            className="cursor-pointer text-sm leading-6 font-semibold text-gray-900 dark:text-white"
          >
            <span className="font-bold">{item.name}</span>
          </button>
        ))}
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900/95 lg:hidden">
          <div className="p-4 flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Imagination</span>
              <Image
                src={Logo}
                alt=""
                width={32}
                height={32}
                className="h-8 w-auto"
                unoptimized
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 space-y-2 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-semibold text-gray-900 dark:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
