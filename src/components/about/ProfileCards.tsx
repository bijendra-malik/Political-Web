"use client";

import { ArrowRight } from "lucide-react";

const profiles = [
  {
    role: "KEY ASSOCIATION",
    name: "Arvind Kejriwal",
    title: "National Convener, Aam Aadmi Party",
    description:
      "Dedicated to building a stronger, transparent and people-centric India through active public service and community engagement.",
    image: "/images/about-me0mg/arvind-kejriwal-meeting-removebg-preview.png",
    accentColor: "#26ae90",
    imageOnLeft: true,
  },
  {
    role: "NATIONAL LEADER",
    name: "Sanjay Singh",
    title: "National Spokesperson, Aam Aadmi Party",
    description:
      "Working for change with honesty, dedication and a vision to create opportunities and a better tomorrow for every citizen.",
    image: "/images/about-me0mg/about-banner.png",
    accentColor: "#f28c28",
    imageOnLeft: false,
  },
  {
    role: "COMMUNITY LEADER",
    name: "Manish Sisodia",
    title: "Senior Leader, Aam Aadmi Party",
    description:
      "Committed to grassroots development and public welfare with a focus on people, progress and integrity.",
    image: "/images/about-me0mg/manishi-sosdiya-removebg-preview.png",
    accentColor: "#066a9c",
    imageOnLeft: true,
  },
];

export default function ProfileCards() {
  return (
    <div className="space-y-5">
      {profiles.map((profile) => (
        <div
          key={profile.name}
          className="group relative grid grid-cols-1 sm:grid-cols-2 rounded-2xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden cursor-pointer transition-shadow duration-300 ease-out hover:shadow-[0_14px_38px_rgb(0,0,0,0.14)]"
          style={{ ["--accent" as string]: profile.accentColor }}
        >
          {/* Accent bar on the image side */}
          <span
            className={`hidden sm:block absolute top-0 bottom-0 w-0 group-hover:w-1.5 transition-all duration-300 ease-out z-10 ${
              profile.imageOnLeft ? "left-0" : "right-0"
            }`}
            style={{ backgroundColor: profile.accentColor }}
            aria-hidden="true"
          />
          <span
            className="sm:hidden absolute top-0 left-0 right-0 h-0 group-hover:h-1.5 transition-all duration-300 ease-out z-10"
            style={{ backgroundColor: profile.accentColor }}
            aria-hidden="true"
          />

          {/* Image half */}
          <div
            className={`relative h-48 sm:h-[220px] overflow-hidden bg-gray-50 flex items-center justify-center ${
              profile.imageOnLeft ? "order-1" : "order-1 sm:order-2"
            }`}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Content half */}
          <div
            className={`flex flex-col justify-between p-5 bg-white h-48 sm:h-[220px] ${
              profile.imageOnLeft ? "order-2" : "order-2 sm:order-1"
            }`}
          >
            <div>
              <h3
                className="font-bold text-xl mb-1 tracking-tight text-gray-800 transition-colors duration-300"
                style={{ ["--hover-color" as string]: profile.accentColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = profile.accentColor)
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {profile.name}
              </h3>
              <p
                className="text-sm font-medium mb-3"
                style={{ color: profile.accentColor }}
              >
                {profile.title}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {profile.description}
              </p>
            </div>

            {/* Footer strip */}
            <div
              className="flex items-center justify-between gap-2 mt-4 pt-0 border-t"
              style={{ borderColor: `${profile.accentColor}33` }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-[2px] transition-all duration-300 w-4 group-hover:w-10"
                  style={{ backgroundColor: profile.accentColor }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: profile.accentColor }}
                >
                  {profile.role}
                </span>
              </div>

              <span
                aria-label="View profile"
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5"
                style={{
                  backgroundColor: `${profile.accentColor}18`,
                  color: profile.accentColor,
                }}
              >
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
