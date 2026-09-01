import Link from "next/link";
import { ArrowLeft, ArrowRight, Users, Flag, Award, Heart } from "lucide-react";

export default function ArvindKejriwalPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left — Content */}
            <div className="flex-1 space-y-6">
              <Link
                href="/#about"
                className="inline-flex items-center gap-2 text-[#26ae90] hover:text-[#0f5c4a] transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to About
              </Link>

              <div className="inline-flex items-center gap-2">
                <div className="w-10 h-[3px] bg-[#26ae90]" />
                <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">
                  Key Association
                </span>
              </div>

              <h1 className="font-[var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#066a9c] leading-tight">
                Arvind <span className="text-[#26ae90]">Kejriwal</span>
              </h1>

              <p className="text-[#26ae90] text-lg font-medium">
                National Convener, Aam Aadmi Party
              </p>

              <p className="text-gray-500 leading-relaxed text-[15px] max-w-lg">
                Arvind Kejriwal is a prominent Indian politician and the National Convener of the Aam Aadmi Party (AAP). 
                Known for his commitment to transparent governance and anti-corruption activism, he has been a driving force 
                behind initiatives aimed at improving public services and empowering citizens.
              </p>

              <p className="text-gray-500 leading-relaxed text-[15px] max-w-lg">
                His vision for a stronger, more inclusive India has inspired millions, and his leadership continues to 
                shape the political landscape of the country. Working closely with dedicated party members like 
                Bijendra Malik, he has built a movement focused on people-first governance.
              </p>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-[#26ae90]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#26ae90]/15 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#26ae90]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">People-Centric</h4>
                    <p className="text-gray-500 text-xs">Focus on public welfare</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#26ae90]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#26ae90]/15 rounded-full flex items-center justify-center">
                    <Flag className="w-5 h-5 text-[#26ae90]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Anti-Corruption</h4>
                    <p className="text-gray-500 text-xs">Transparent governance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#26ae90]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#26ae90]/15 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#26ae90]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">National Leader</h4>
                    <p className="text-gray-500 text-xs">AAP National Convener</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#26ae90]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#26ae90]/15 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#26ae90]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Social Impact</h4>
                    <p className="text-gray-500 text-xs">Transforming communities</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm uppercase tracking-wider"
                >
                  Know More About AAP
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative w-full lg:w-[48%] flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-me0mg/arvind-kejriwal-meeting-removebg-preview.png"
                  alt="Arvind Kejriwal"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[550px] object-contain object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26ae90]/10 to-transparent" />
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#26ae90]/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#066a9c]/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
