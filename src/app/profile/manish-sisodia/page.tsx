import Link from "next/link";
import { ArrowLeft, ArrowRight, Users, Flag, Award, Heart } from "lucide-react";

export default function ManishSisodiaPage() {
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
                className="inline-flex items-center gap-2 text-[#066a9c] hover:text-[#044e72] transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to About
              </Link>

              <div className="inline-flex items-center gap-2">
                <div className="w-10 h-[3px] bg-[#066a9c]" />
                <span className="text-[#066a9c] font-semibold text-sm uppercase tracking-[0.2em]">
                  Community Leader
                </span>
              </div>

              <h1 className="font-[var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#066a9c] leading-tight">
                Manish <span className="text-[#066a9c]">Sisodia</span>
              </h1>

              <p className="text-[#066a9c] text-lg font-medium">
                Senior Leader, Aam Aadmi Party
              </p>

              <p className="text-gray-500 leading-relaxed text-[15px] max-w-lg">
                Manish Sisodia is a prominent leader of the Aam Aadmi Party and has served as the Deputy Chief Minister of Delhi. 
                Known for his transformative work in education and healthcare, he has been a champion of grassroots development 
                and public welfare initiatives.
              </p>

              <p className="text-gray-500 leading-relaxed text-[15px] max-w-lg">
                His commitment to improving public services and empowering communities has made him a respected leader. 
                Working alongside dedicated party members like Bijendra Malik, he continues to focus on people, 
                progress and integrity in governance.
              </p>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-[#066a9c]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#066a9c]/15 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#066a9c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Education Reform</h4>
                    <p className="text-gray-500 text-xs">Transforming schools</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#066a9c]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#066a9c]/15 rounded-full flex items-center justify-center">
                    <Flag className="w-5 h-5 text-[#066a9c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Healthcare</h4>
                    <p className="text-gray-500 text-xs">Mohalla clinics</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#066a9c]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#066a9c]/15 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#066a9c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Deputy CM</h4>
                    <p className="text-gray-500 text-xs">Former Delhi Deputy CM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#066a9c]/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#066a9c]/15 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#066a9c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Community Work</h4>
                    <p className="text-gray-500 text-xs">Grassroots development</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#066a9c] hover:bg-[#066a9c]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm uppercase tracking-wider"
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
                  src="/images/about-me0mg/manishi-sosdiya-removebg-preview.png"
                  alt="Manish Sisodia"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[550px] object-contain object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#066a9c]/10 to-transparent" />
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#066a9c]/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#26ae90]/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
