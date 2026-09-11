"use client";

interface PageHeroProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  /** One string, or an array of lines — array items render on separate lines. */
  description?: string | string[];
  bgImage?: string;
  backgroundImage?: string;
  bgPosition?: string;
  mobileBgPosition?: string;
  strongOverlay?: boolean;
  /** Desktop placement of the text panel — each page picks its own. Mobile is always centered. */
  panelPosition?: "left" | "center" | "right" | "top-left" | "top" | "top-right" | "bottom-left" | "bottom" | "bottom-right" | "end" | "start";
  /** Exact custom placement, editable per page — desktop only (mobile stays centered).
   *  Example: panelOffset={{ top: "60px", left: "48px" }} — px / % / rem all work.
   *  Any axis you leave out keeps the panelPosition value for that axis. */
  panelOffset?: { top?: string; right?: string; bottom?: string; left?: string };
  /** Direct CSS control (desktop only, overrides panelPosition per axis). Mobile stays centered.
   *  panelJustify = justify-content (vertical here), panelAlign = align-items (horizontal here).
   *  Example: panelJustify="end" pushes the panel to the bottom. */
  panelJustify?: "start" | "center" | "end";
  panelAlign?: "start" | "center" | "end";
  /** Vertical placement on MOBILE only (desktop uses panelJustify/panelPosition). Default center. */
  mobileJustify?: "start" | "center" | "end";
  /** Dims the background image on mobile only (desktop/tablet untouched). */
  mobileDimImage?: boolean;
  /** Caps the panel width, e.g. panelWidth="400px" — useful when the banner has faces/subjects
   *  on both sides and the panel must fit the clear strip between them. */
  panelWidth?: string;
}

// Mobile-only object-position overrides, applied through a CSS var so the
// desktop objectPosition (bgPosition) is untouched on larger screens.
// Literal class maps so Tailwind JIT can see every value used.
const JUSTIFY_CLASS: Record<string, string> = { start: "md:justify-start", center: "md:justify-center", end: "md:justify-end" };
const MOBILE_JUSTIFY_CLASS: Record<string, string> = { start: "justify-start", center: "justify-center", end: "justify-end" };
const ALIGN_CLASS: Record<string, string> = { start: "md:items-start", center: "md:items-center", end: "md:items-end" };

const MOBILE_BG_POSITION_CLASS: Record<string, string> = {
  "left-top": "max-md:[--pagehero-bg-pos:0%_0%]",
  left: "max-md:[--pagehero-bg-pos:left]",
  "right-top": "max-md:[--pagehero-bg-pos:100%_0%]",
  center: "max-md:[--pagehero-bg-pos:center]",
};

export default function PageHero({ label, title, titleHighlight, subtitle, description, bgImage, backgroundImage, bgPosition = "top", mobileBgPosition, strongOverlay = false, panelPosition = "left", panelOffset, panelJustify, panelAlign, mobileJustify = "center", mobileDimImage = false, panelWidth }: PageHeroProps) {
  const bg = backgroundImage || bgImage || "/images/public-rally.jpg";
  // Desktop placement of the text panel — fully per-page custom (9 combos).
  // Direct panelJustify/panelAlign values win; otherwise derive from panelPosition:
  //   Vertical: top* => start, bottom* => end, else centered.
  //   Horizontal: *right => end, *center/top/bottom => centered, else (left) => start.
  const vAlignClass = panelJustify ? JUSTIFY_CLASS[panelJustify] : panelPosition.startsWith("top") ? "md:justify-start" : panelPosition.startsWith("bottom") ? "md:justify-end" : "md:justify-center";
  const hAlignClass = panelAlign ? ALIGN_CLASS[panelAlign] : panelPosition.endsWith("right") ? "md:items-end" : panelPosition === "top" || panelPosition === "bottom" || panelPosition === "center" ? "md:items-center" : "md:items-start";

  return (
    <section className="relative min-h-[490px] lg:min-h-[710px] flex items-center overflow-hidden">
      {/* Background — image stays clear; readability comes from the text panel below */}
      <div className="absolute inset-0 mt-4">
        <img
          src={bg}
          alt=""
          className={`w-full h-full object-cover ${mobileBgPosition ? MOBILE_BG_POSITION_CLASS[mobileBgPosition] ?? "" : ""}`}
          style={{ objectPosition: mobileBgPosition ? `var(--pagehero-bg-pos, ${bgPosition})` : bgPosition }}
        />
        {/* Mobile-only image dim (desktop/tablet keep the image full brightness) */}
        {mobileDimImage && <div className="absolute inset-0 bg-black/40 md:hidden" />}
        {/* Very subtle bottom fade only, so the hero blends into the page below */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      
      {/* Text layer — panel is positioned (left/top/bottom) on desktop, centered on mobile */}
      <div className="absolute inset-0 z-10 flex">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col ${MOBILE_JUSTIFY_CLASS[mobileJustify]} items-center py-16 lg:py-20 ${vAlignClass} ${hAlignClass}`}>
        {/* Dark highlight panel behind the text only */}
        <div
          className={`w-fit max-w-full text-center md:text-left backdrop-blur-xs rounded-2xl border border-white/50 p-4 sm:p-3 lg:p-6 ${strongOverlay ? "bg-black/65" : "bg-black/50"} ${panelOffset ? "md:absolute" : ""}`}
          style={{ maxWidth: panelWidth, ...(panelOffset ? { top: panelOffset.top, right: panelOffset.right, bottom: panelOffset.bottom, left: panelOffset.left } : {}) }}
        >
        {label && (
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-[#f28c28]" />
            <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">{label}</span>
          </div>
        )}
        <h1 className="font-[var(--font-poppins)] text-xl sm:text-xl lg:text-2xl font-bold text-white leading-tight max-w-xl">
          {title}{" "}
          {titleHighlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#26ae90] to-[#f2f231]">{titleHighlight}</span>
          )}
        </h1>
        {subtitle && (
          <p className="text-white/70 mt-1 text-md font-[var(--font-poppins)] font-medium">{subtitle}</p>
        )}
        {description && (
          <p className="text-white/60 mt-2 text-sm max-w-xl leading-relaxed">
            {Array.isArray(description) ? description.map((line, i) => (
              <span key={i}>{line}{i < description.length - 1 && <br />}</span>
            )) : description}
          </p>
        )}
        </div>
        </div>
      </div>
    </section>
  );
}
