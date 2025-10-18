/** @format */

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="hidden sm:flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src="/plant-logo.png"
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
        <nav className="hidden sm:flex items-center gap-1 bg-primary rounded-lg px-2 lg:px-6 py-1">
          <Link
            href="#"
            className="text-white text-sm font-medium px-1 lg:px-3 py-1 hover:bg-primary/80 rounded-full transition"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white text-sm font-medium px-1 lg:px-3 py-1 hover:bg-primary/80 rounded-full transition"
          >
            Truck Fleets
          </Link>
          <Link
            href="#"
            className="text-white text-sm font-medium px-1 lg:px-3 py-1 hover:bg-primary/80 rounded-full transition"
          >
            Equipment
          </Link>
          <Link
            href="#"
            className="text-white text-sm font-medium px-1 lg:px-3 py-1 hover:bg-primary/80 rounded-full transition"
          >
            Materials
          </Link>
          <Link
            href="#"
            className="text-white text-sm font-medium px-1 lg:px-3 py-1 hover:bg-primary/80 rounded-full transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu - Only visible on small screens */}
        <div className="flex sm:hidden items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary h-6 px-0 hover:bg-transparent hover:text-primary  focus-visible:ring-0 shadow-none"
              >
                <Menu className="h-6 w-6 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-12 block sm:hidden border-0 ml-6 mt-0"
            >
              <DropdownMenuItem asChild className="focus:bg-primary py-1">
                <Link href="#" className="w-full ">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-primary py-1">
                <Link href="#" className="w-full ">
                  Truck Fleets
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-primary py-1">
                <Link href="#" className="w-full">
                  Equipment
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-primary py-1">
                <Link href="#" className="w-full">
                  Materials
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-primary py-1">
                <Link href="#" className="w-full">
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* CTA Button - Hidden on mobile */}
        <Button className="text-xs md:text-sm h-7 sm:h-8 px-2 md:px-4 bg-custom-orange rounded-sm hover:bg-custom-orange/80 border-2 border-orange-700 text-primary font-bold">
          GET A QUOTE
        </Button>
      </div>
    </header>
  );
}
