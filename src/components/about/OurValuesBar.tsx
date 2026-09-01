"use client";

import { Users, TrendingUp, Shield } from "lucide-react";

export default function OurValuesBar() {
  return (
    <div className="mt-0 bg-gradient-to-r from-[#f0fdf9] to-white rounded-2xl p-6 lg:p-8 border border-gray-100 relative overflow-hidden">
      {/* City Skyline at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none opacity-20">
        <img src="/images/about-decor-skyline.png" alt="" className="w-full h-full object-cover object-bottom" />
      </div>
      {/* Decorative circle */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#26ae90]/5 rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#26ae90] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div>
            <span className="text-[#26ae90] text-xs font-semibold uppercase tracking-wider block mb-1">
              Our Values
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 tracking-tight">
              Building a Better Tomorrow
            </h3>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

        {/* Values */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left group/item">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="w-12 h-12 bg-[#066a9c]/10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                <Users className="w-6 h-6 text-[#066a9c]" />
              </div>
              <h4 className="font-bold text-gray-800">People</h4>
            </div>
            <p className="text-gray-500 text-sm">Our strength is our people.</p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left group/item">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="w-12 h-12 bg-[#26ae90]/10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                <TrendingUp className="w-6 h-6 text-[#26ae90]" />
              </div>
              <h4 className="font-bold text-gray-800">Progress</h4>
            </div>
            <p className="text-gray-500 text-sm">Moving forward with purpose.</p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left group/item">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="w-12 h-12 bg-[#f28c28]/10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                <Shield className="w-6 h-6 text-[#f28c28]" />
              </div>
              <h4 className="font-bold text-gray-800">Integrity</h4>
            </div>
            <p className="text-gray-500 text-sm">Honesty in action, always.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
