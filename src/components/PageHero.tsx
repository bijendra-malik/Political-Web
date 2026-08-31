"use client";

interface PageHeroProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  bgImage?: string;
  backgroundImage?: string;
}

export default function PageHero({ label, title, titleHighlight, subtitle, description, bgImage, backgroundImage }: PageHeroProps) {
  const bg = backgroundImage || bgImage || "/images/public-rally.jpg";

  return (
    <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/80 via-[#071525]/30 to-[#071525]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/60 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        {label && (
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-[#f28c28]" />
            <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">{label}</span>
          </div>
        )}
        <h1 className="font-[var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
          {title}{" "}
          {titleHighlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#26ae90] to-[#f2f231]">{titleHighlight}</span>
          )}
        </h1>
        {subtitle && (
          <p className="text-white/70 mt-3 text-lg font-[var(--font-poppins)] font-medium">{subtitle}</p>
        )}
        {description && (
          <p className="text-white/50 mt-4 text-base max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
