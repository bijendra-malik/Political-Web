"use client";

import { ArrowRight } from "lucide-react";
import {
  Users,
  ShieldCheck,
  Building2,
  Heart,
} from "lucide-react";

const values = [
  {
    title: "People First Approach",
    description: "Putting people's needs at the center of every decision.",
    icon: Users,
    accentColor: "#26ae90",
  },
  {
    title: "Transparent Leadership",
    description: "Upholding honesty, integrity and accountability always.",
    icon: ShieldCheck,
    accentColor: "#066a9c",
  },
  {
    title: "Inclusive Development",
    description: "Working for equal opportunities and balanced growth for all.",
    icon: Building2,
    accentColor: "#f28c28",
  },
  {
    title: "Empowering Communities",
    description:
      "Strengthening communities through education, health and self-reliance.",
    icon: Heart,
    accentColor: "#0f5c4a",
  },
];

export default function ValuesSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {/* Left Column - 2 Cards */}
      <div className="space-y-4">
        {/* Card 1 - People First Approach */}
        <div className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white hover:bg-gray-50/50 transition-colors duration-300 p-5">
          <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300" style={{ backgroundColor: "#26ae90" }} />
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(38, 174, 144, 0.15)" }}>
                <Users className="w-5 h-5" style={{ color: "#26ae90" }} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-[15px] mb-1">
                  People First Approach
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Putting peoples needs at the center of every decision.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" style={{ backgroundColor: "rgba(38, 174, 144, 0.1)" }}>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: "#26ae90" }} />
            </div>
          </div>
        </div>

        {/* Card 2 - Transparent Leadership */}
        <div className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white hover:bg-gray-50/50 transition-colors duration-300 p-5">
          <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300" style={{ backgroundColor: "#066a9c" }} />
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(6, 106, 156, 0.15)" }}>
                <ShieldCheck className="w-5 h-5" style={{ color: "#066a9c" }} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-[15px] mb-1">
                  Transparent Leadership
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Upholding honesty, integrity and accountability always.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" style={{ backgroundColor: "rgba(6, 106, 156, 0.1)" }}>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: "#066a9c" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - 2 Cards */}
      <div className="space-y-4">
        {/* Card 3 - Inclusive Development */}
        <div className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white hover:bg-gray-50/50 transition-colors duration-300 p-5">
          <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300" style={{ backgroundColor: "#f28c28" }} />
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(242, 140, 40, 0.15)" }}>
                <Building2 className="w-5 h-5" style={{ color: "#f28c28" }} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-[15px] mb-1">
                  Inclusive Development
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Working for equal opportunities and balanced growth for all.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" style={{ backgroundColor: "rgba(242, 140, 40, 0.1)" }}>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: "#f28c28" }} />
            </div>
          </div>
        </div>

        {/* Card 4 - Empowering Communities */}
        <div className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white hover:bg-gray-50/50 transition-colors duration-300 p-5">
          <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300" style={{ backgroundColor: "#0f5c4a" }} />
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(15, 92, 74, 0.15)" }}>
                <Heart className="w-5 h-5" style={{ color: "#0f5c4a" }} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-[15px] mb-1">
                  Empowering Communities
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Strengthening communities through education, health and self-reliance.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" style={{ backgroundColor: "rgba(15, 92, 74, 0.1)" }}>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: "#0f5c4a" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
