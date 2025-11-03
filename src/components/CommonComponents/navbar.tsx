/** @format */

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
              className="object-contain w-6 h-6 md:w-10 md:h-10"
            />
          </Link>
          <span className="hidden lg:flex font-bold text-lg xl:text-2xl text-primary">
            LA PLANT HIRE
          </span>
        </div>

        {/* Desktop Navigation */}
        <MenuButtons />

        {/* CTA Button - Hidden on mobile */}
        <div className="flex gap-2 md:gap-3 xl:gap-4 justify-center items-center">
          <p className="text-xs md:text-sm lg:text-base">
            Call: <span className="font-bold">1300 52 34 78</span>
          </p>
          <Button className="text-xs md:text-sm h-7 sm:h-8 px-2 md:px-4 bg-custom-orange rounded-sm hover:bg-custom-orange/80 border-2 border-orange-700 text-primary font-bold">
            GET A QUOTE
          </Button>
        </div>
      </div>
    </header>
  );
}
