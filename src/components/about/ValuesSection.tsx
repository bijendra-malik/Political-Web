"use client";

import {
  Users,
  ShieldCheck,
  Building2,
  Heart,
  TrendingUp,
  Shield,
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
    <div className="rounded-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden bg-white">
      {values.map((item) => (
        <div
          key={item.title}
          tabIndex={0}
          className="group relative flex items-start gap-4 p-4 sm:p-5 transition-colors duration-300 cursor-default focus-visible:outline-none focus-visible:bg-gray-50"
          style={{ ["--accent" as string]: item.accentColor }}
        >
          {/* Left edge highlight */}
          <span
            className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 group-focus-visible:w-1 transition-all duration-300"
            style={{ backgroundColor: item.accentColor }}
            aria-hidden="true"
          />

          <div
            className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${item.accentColor}18` }}
          >
            <item.icon className="w-5 h-5" style={{ color: item.accentColor }} />
          </div>

          <div className="pt-0.5 transition-transform duration-300 group-hover:translate-x-0.5">
            <h4 className="font-semibold text-gray-800 text-[15px] mb-0.5">
              {item.title}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
