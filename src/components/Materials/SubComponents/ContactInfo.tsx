/** @format */

import { MapPin, Phone, Mail, Globe, Building2 } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-8">
        Contact Information
      </h2>

      <div className="space-y-6">
        {/* Company */}
        <div className="flex gap-4">
          <Building2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-foreground">Company</p>
            <p className="text-sm text-muted-foreground">LA Trading Pty Ltd</p>
            <p className="text-sm text-muted-foreground">ABN: 65107948032</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex gap-4">
          <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-foreground">Address</p>
            <p className="text-sm text-muted-foreground">292 Wynne Road</p>
            <p className="text-sm text-muted-foreground">Holmview QLD 4207</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-foreground">Phone</p>
            <p className="text-sm text-muted-foreground">0414 44 55 10</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4">
          <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-foreground">Email</p>
            <p className="text-sm text-muted-foreground">
              info@latrading.com.au
            </p>
          </div>
        </div>

        {/* Website */}
        <div className="flex gap-4">
          <Globe className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-foreground">Website</p>
            <p className="text-sm text-muted-foreground">latrading.com.au</p>
          </div>
        </div>

        {/* Get Directions Button */}
        <button className="w-full bg-[#36b37e] hover:bg-[#229f6a] text-white font-bold py-3 rounded transition flex items-center justify-center gap-2 mt-8">
          <span>📍</span>
          GET DIRECTIONS
        </button>
      </div>
    </div>
  );
}
