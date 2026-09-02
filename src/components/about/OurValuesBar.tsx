"use client";

import { Users, TrendingUp, Shield } from "lucide-react";

export default function OurValuesBar() {
  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: "120px" }}>

      {/* Background — skyline full cover, vertically centered */}
      <img
        src="/images/about-decor-skyline.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Light overlay so text stays readable */}
      <div className="absolute inset-0 bg-[#f0fdf9]/80" />

      {/* Content — absolutely centered in the image */}
      <div className="relative z-10 flex flex-row items-center gap-8 px-8 sm:px-12 lg:px-16 py-8">

        {/* Left — icon + heading */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="w-14 h-14 bg-[#26ae90] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
            <Users className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-[#26ae90] text-[11px] font-semibold uppercase tracking-wider block mb-0.5">
              Our Values
            </span>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight leading-tight">
              Building a Better Tomorrow
            </h3>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-gray-300 to-transparent flex-shrink-0" />

        {/* 3 values inline */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="flex flex-col group/item">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-[#066a9c]/10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                <Users className="w-5 h-5 text-[#066a9c]" />
              </div>
              <h4 className="font-bold text-gray-800 text-sm">People</h4>
            </div>
            <p className="text-gray-500 text-xs pl-[52px]">Our strength is our people.</p>
          </div>

          <div className="flex flex-col group/item">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-[#26ae90]/10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                <TrendingUp className="w-5 h-5 text-[#26ae90]" />
              </div>
              <h4 className="font-bold text-gray-800 text-sm">Progress</h4>
            </div>
            <p className="text-gray-500 text-xs pl-[52px]">Moving forward with purpose.</p>
          </div>
          

          <div className="flex flex-col group/item">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-[#f28c28]/10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                <Shield className="w-5 h-5 text-[#f28c28]" />
              </div>
              <h4 className="font-bold text-gray-800 text-sm">Integrity</h4>
            </div>
            <p className="text-gray-500 text-xs pl-[52px]">Honesty in action, always.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
