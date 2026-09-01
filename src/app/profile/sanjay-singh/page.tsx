import Link from "next/link";
import { ArrowLeft, ArrowRight, Users, Flag, Award, Heart } from "lucide-react";

export default function SanjaySinghPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left — Image */}
            <div className="relative w-full lg:w-[48%] flex-shrink-0 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-me0mg/about-banner.png"
                  alt="Sanjay Singh"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[550px] object-contain object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f28c28]/10 to-transparent" />
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f28c28]/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#066a9c]/5 rounded-2xl -z-10" />
            </div>

            {/* Right — Content */}
            <div className="flex-1 space-y-6 order-1 lg:order-2">
              <Link
                href="/#about"
                className="inline-flex items-center gap-2 text-[#f28c28] hover:text-[#d4791a] transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to About
              </Link>

              <div className="inline-flex items-center gap-2">
                <div className="w-10 h-[3px] bg-[#f28c28]" />
                <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">
                  National Leader
                </span>
              </div>

              <h1 className="font-[var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#066a9c] leading-tight">
                Sanjay <span className="text-[#f28c28]">Singh</span>
              </h1>

              <p className="text-[#f28c28] text-lg font-medium">
                National Spokesperson, Aam Aadmi Party
              </p>

              <p className="text-gray-500 leading-relaxed text-[15px] max-w-lg">
                Sanjay Singh is a senior leader of the Aam Aadmi Party and serves as its National Spokesperson. 
                Known for his articulate communication and strong advocacy for public causes, he has been instrumental 
                in shaping the party&apos;s narrative and connecting with citizens across India.
              </p>

              <p className="text-gray-500 leading-relaxed text-[15px] max-w-lg">
                His dedication to honest governance and people-centric policies has made him a respected figure in 
                Indian politics. Working alongside leaders like Bijendra Malik, he continues to champion the cause 
                of transparent and accountable governance.
              </p>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-[#f28c28]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#f28c28]/15 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#f28c28]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Public Voice</h4>
                    <p className="text-gray-500 text-xs">National Spokesperson</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#f28c28]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#f28c28]/15 rounded-full flex items-center justify-center">
                    <Flag className="w-5 h-5 text-[#f28c28]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Political Strategy</h4>
                    <p className="text-gray-500 text-xs">Party communications</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#f28c28]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#f28c28]/15 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#f28c28]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Senior Leader</h4>
                    <p className="text-gray-500 text-xs">AAP leadership</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#f28c28]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#f28c28]/15 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#f28c28]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Social Commitment</h4>
                    <p className="text-gray-500 text-xs">Community engagement</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#f28c28] hover:bg-[#f28c28]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm uppercase tracking-wider"
                >
                  Know More About AAP
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
