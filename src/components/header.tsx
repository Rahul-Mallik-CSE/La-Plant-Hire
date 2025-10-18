/** @format */

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
            🌱
          </div>
          <span className="font-bold text-lg text-foreground">
            LA PLANT HIRE
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-primary rounded-full px-6 py-2">
          <a
            href="#"
            className="text-white text-sm font-medium px-3 py-1 hover:bg-primary/80 rounded-full transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-sm font-medium px-3 py-1 hover:bg-primary/80 rounded-full transition"
          >
            Truck Fleets
          </a>
          <a
            href="#"
            className="text-white text-sm font-medium px-3 py-1 hover:bg-primary/80 rounded-full transition"
          >
            Equipment
          </a>
          <a
            href="#"
            className="text-white text-sm font-medium px-3 py-1 hover:bg-primary/80 rounded-full transition"
          >
            Materials
          </a>
          <a
            href="#"
            className="text-white text-sm font-medium px-3 py-1 hover:bg-primary/80 rounded-full transition"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <Button className="bg-accent hover:bg-[#e67e00] text-foreground font-bold">
          GET A QUOTE
        </Button>
      </div>
    </header>
  );
}
