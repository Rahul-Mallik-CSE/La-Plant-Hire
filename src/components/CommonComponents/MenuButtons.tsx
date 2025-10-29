/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function MenuButtons() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-1 bg-primary rounded-lg px-2  py-1">
        <Link
          href="/"
          className={`text-white text-sm font-medium px-1 lg:px-3 py-1 rounded-xs transition ${
            pathname === "/" ? "bg-gray-600" : "hover:bg-gray-700"
          }`}
        >
          Home
        </Link>
        <Link
          href="/truck-fleet"
          className={`text-white text-sm font-medium px-1 lg:px-3 py-1 rounded-xs transition ${
            pathname === "/truck-fleets" ? "bg-gray-600" : "hover:bg-gray-700"
          }`}
        >
          Truck Fleet
        </Link>
        <Link
          href="/equipment"
          className={`text-white text-sm font-medium px-1 lg:px-3 py-1 rounded-xs transition ${
            pathname === "/equipment" ? "bg-gray-600" : "hover:bg-gray-700"
          }`}
        >
          Equipment
        </Link>
        <Link
          href="/materials"
          className={`text-white text-sm font-medium px-1 lg:px-3 py-1 rounded-xs transition ${
            pathname === "/materials" ? "bg-gray-600" : "hover:bg-gray-700"
          }`}
        >
          Materials
        </Link>
        <Link
          href="/soil-register"
          className={`text-white text-sm font-medium px-1 lg:px-3 py-1 rounded-xs transition ${
            pathname === "/contact" ? "bg-gray-600" : "hover:bg-gray-700"
          }`}
        >
          Soild Register
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
            <DropdownMenuItem
              asChild
              className={`py-1 ${
                pathname === "/"
                  ? "bg-primary focus:bg-black text-white"
                  : "focus:bg-gray-200 focus:text-black"
              }`}
            >
              <Link href="/" className="w-full ">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className={`py-1 ${
                pathname === "/truck-fleets"
                  ? "bg-primary focus:bg-black text-white"
                  : "focus:bg-gray-200 focus:text-black"
              }`}
            >
              <Link href="/truck-fleet" className="w-full ">
                Truck Fleet
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className={`py-1 ${
                pathname === "/equipment"
                  ? "bg-primary focus:bg-black text-white"
                  : "focus:bg-gray-200 focus:text-black"
              }`}
            >
              <Link href="/equipment" className="w-full">
                Equipment
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className={`py-1 ${
                pathname === "/materials"
                  ? "bg-primary focus:bg-black text-white"
                  : "focus:bg-gray-200 focus:text-black"
              }`}
            >
              <Link href="/materials" className="w-full">
                Materials
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className={`py-1 ${
                pathname === "/contact"
                  ? "bg-primary focus:bg-black text-white"
                  : "focus:bg-gray-200 focus:text-black"
              }`}
            >
              <Link href="/soil-register" className="w-full">
                Soild Register
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
