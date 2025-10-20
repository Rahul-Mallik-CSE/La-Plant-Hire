/** @format */

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background3 text-primary pt-4 md:pt-12 pb-3 md:pb-6">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-4 text-center md:text-left gap-4 md:gap-8 mb-4 md:mb-8">
          {/* Company Info */}
          <div>
            <div className="w-full flex items-center justify-center md:justify-start gap-2 mb-4">
              <Link href={"/"}>
                <Image
                  src="/logo/plant-logo.png"
                  alt="LA Plant Hire Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <span className="font-bold text-lg">LA PLANT HIRE</span>
            </div>
            <p className="text-xs ">
              Queensland&apos;s trusted family-owned plant hire company
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-2 text-sm">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="hover:underline transition ">
                  Truck Hire
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Soil Removal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Material Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Equipment Hire
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-2">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="hover:underline transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Our Fleet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="tel:0414448510"
                  className="hover:underline transition"
                >
                  0414 448 510
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@laplanthire.com.au"
                  className="hover:underline transition"
                >
                  info@laplanthire.com.au
                </Link>
              </li>
              <li>Queensland, Australia</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 pt-3 md:pt-8 text-center text-xs text-primary">
          <p>© 2025 LA Plant Hire. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
