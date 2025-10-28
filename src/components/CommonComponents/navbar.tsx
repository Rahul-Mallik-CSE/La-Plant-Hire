/** @format */

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import MenuButtons from "./MenuButtons";

export default function Navbar() {
  return (
    <header className="bg-white ">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="hidden sm:flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src="/logo/plant-logo.png"
              alt="LA Plant Hire Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <span className="hidden lg:flex font-bold text-xl lg:text-2xl text-primary">
            LA PLANT HIRE
          </span>
        </div>

        {/* Desktop Navigation */}
        <MenuButtons />

        {/* CTA Button - Hidden on mobile */}
        <Button className="text-xs md:text-sm h-7 sm:h-8 px-2 md:px-4 bg-custom-orange rounded-sm hover:bg-custom-orange/80 border-2 border-orange-700 text-primary font-bold">
          GET A QUOTE
        </Button>
      </div>
    </header>
  );
}
