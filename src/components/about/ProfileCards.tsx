"use client";

import { useState } from "react";
import { ArrowRight, ArrowDown, Users, Flag, Award, Heart } from "lucide-react";

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
    fullDescription: [
      "Arvind Kejriwal is a prominent Indian politician and the National Convener of the Aam Aadmi Party (AAP). Known for his commitment to transparent governance and anti-corruption activism, he has been a driving force behind initiatives aimed at improving public services and empowering citizens.",
      "His vision for a stronger, more inclusive India has inspired millions, and his leadership continues to shape the political landscape of the country. Working closely with dedicated party members like Bijendra Malik, he has built a movement focused on people-first governance.",
    ],
    achievements: [
      { icon: Users, title: "People-Centric", desc: "Focus on public welfare" },
      { icon: Flag, title: "Anti-Corruption", desc: "Transparent governance" },
      { icon: Award, title: "National Leader", desc: "AAP National Convener" },
      { icon: Heart, title: "Social Impact", desc: "Transforming communities" },
    ],
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
    fullDescription: [
      "Sanjay Singh is a senior leader of the Aam Aadmi Party and serves as its National Spokesperson. Known for his articulate communication and strong advocacy for public causes, he has been instrumental in shaping the party's narrative and connecting with citizens across India.",
      "His dedication to honest governance and people-centric policies has made him a respected figure in Indian politics. Working alongside leaders like Bijendra Malik, he continues to champion the cause of transparent and accountable governance.",
    ],
    achievements: [
      { icon: Users, title: "Public Voice", desc: "National Spokesperson" },
      { icon: Flag, title: "Political Strategy", desc: "Party communications" },
      { icon: Award, title: "Senior Leader", desc: "AAP leadership" },
      { icon: Heart, title: "Social Commitment", desc: "Community engagement" },
    ],
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
    fullDescription: [
      "Manish Sisodia is a prominent leader of the Aam Aadmi Party and has served as the Deputy Chief Minister of Delhi. Known for his transformative work in education and healthcare, he has been a champion of grassroots development and public welfare initiatives.",
      "His commitment to improving public services and empowering communities has made him a respected leader. Working alongside dedicated party members like Bijendra Malik, he continues to focus on people, progress and integrity in governance.",
    ],
    achievements: [
      { icon: Users, title: "Education Reform", desc: "Transforming schools" },
      { icon: Flag, title: "Healthcare", desc: "Mohalla clinics" },
      { icon: Award, title: "Deputy CM", desc: "Former Delhi Deputy CM" },
      { icon: Heart, title: "Community Work", desc: "Grassroots development" },
    ],
  },
];

export default function ProfileCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-5">
      {profiles.map((profile, index) => (
        <div key={profile.name}>
          {/* Profile Card */}
          <div
            className="group relative grid grid-cols-1 sm:grid-cols-2 rounded-2xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden cursor-pointer transition-shadow duration-300 ease-out hover:shadow-[0_14px_38px_rgb(0,0,0,0.14)]"
            style={{ ["--accent" as string]: profile.accentColor }}
            onClick={() => toggleExpand(index)}
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
                  <ArrowDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Expanded Content - Shows on Landing Page */}
          {expandedIndex === index && (
            <div
              className="mt-4 p-6 rounded-2xl border border-gray-100 bg-white shadow-lg animate-fadeInUp"
              style={{ ["--accent" as string]: profile.accentColor }}
            >
              {/* Full Description */}
              <div className="space-y-4 mb-6">
                {profile.fullDescription.map((para, i) => (
                  <p key={i} className="text-gray-500 leading-relaxed text-[15px]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {profile.achievements.map((achievement, i) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl p-4"
                      style={{ backgroundColor: `${profile.accentColor}08` }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${profile.accentColor}15` }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: profile.accentColor }}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-500 text-xs">{achievement.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
