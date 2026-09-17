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
  /** Vertical placement on MOBILE only (desktop uses panelJustify/panelPosition). */
  mobileJustify?: "start" | "center" | "end";
  /** Vertical placement on TABLET only (md–lg range). Desktop keeps panelPosition,
   *  mobile keeps mobileJustify. Example: tabletJustify="end" pins the panel to the
   *  bottom on tablets while desktop stays top-left. */
  tabletJustify?: "start" | "center" | "end";
  /** Vertical placement on DESKTOP only (lg+). Overrides panelPosition on large screens.
   *  Example: desktopJustify="start" puts the panel at the top on desktop. */
  desktopJustify?: "start" | "center" | "end";
  /** Horizontal alignment on DESKTOP only (lg+). Example: desktopAlign="start" keeps
   *  the panel on the left edge on large screens. */
  desktopAlign?: "start" | "center" | "end";
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
// Literal class maps — Tailwind JIT only generates classes it sees as literal strings,
// so every variant below MUST stay written out (no template literals).
const TABLET_JUSTIFY_CLASS: Record<string, string> = { start: "md:justify-start", center: "md:justify-center", end: "md:justify-end" };
const DESKTOP_JUSTIFY_CLASS: Record<string, string> = { start: "lg:justify-start", center: "lg:justify-center", end: "lg:justify-end" };
const MOBILE_JUSTIFY_CLASS = "max-md:justify-end";
const ALIGN_CLASS: Record<string, string> = { start: "md:items-start", center: "md:items-center", end: "md:items-end" };
// Desktop-only overrides — literal classes so Tailwind JIT generates them.
const DESKTOP_JUSTIFY_OVERRIDE: Record<string, string> = { start: "lg:justify-start", center: "lg:justify-center", end: "lg:justify-end" };
const DESKTOP_ALIGN_OVERRIDE: Record<string, string> = { start: "lg:items-start", center: "lg:items-center", end: "lg:items-end" };

const MOBILE_BG_POSITION_CLASS: Record<string, string> = {
  "left-top": "max-md:[--pagehero-bg-pos:0%_0%]",
  left: "max-md:[--pagehero-bg-pos:left]",
  "right-top": "max-md:[--pagehero-bg-pos:100%_0%]",
  center: "max-md:[--pagehero-bg-pos:center]",
};

export default function PageHero({ label, title, titleHighlight, subtitle, description, bgImage, backgroundImage, bgPosition = "top", mobileBgPosition, strongOverlay = false, panelPosition = "left", panelOffset, panelJustify, panelAlign, mobileDimImage = false, panelWidth, tabletJustify, desktopJustify, desktopAlign }: PageHeroProps) {
  const bg = backgroundImage || bgImage || "/images/public-rally.jpg";
  // Desktop placement of the text panel — fully per-page custom (9 combos).
  // Direct panelJustify/panelAlign values win; otherwise derive from panelPosition:
  //   Vertical: top* => start, bottom* => end, else centered.
  //   Horizontal: *right => end, *center/top/bottom => centered, else (left) => start.
  const vAlignClassRaw = panelJustify ? JUSTIFY_CLASS[panelJustify] : panelPosition.startsWith("top") ? "md:justify-start" : panelPosition.startsWith("bottom") ? "md:justify-end" : "md:justify-center";
  // Tablet override: re-sequence the cascade (md:<tablet> lg:<desktop>) so the two
  // ranges never fight — no specificity/order uncertainty.
  const tabletMatch = vAlignClassRaw.match(/^md:justify-(\w+)$/);
  const vAlignClass = tabletJustify && tabletMatch ? `${TABLET_JUSTIFY_CLASS[tabletJustify]} ${DESKTOP_JUSTIFY_CLASS[tabletMatch[1]]}` : vAlignClassRaw;
  const hAlignClass = panelAlign ? ALIGN_CLASS[panelAlign] : panelPosition.endsWith("right") ? "md:items-end" : panelPosition === "top" || panelPosition === "bottom" || panelPosition === "center" ? "md:items-center" : "md:items-start";

  return (
    <section className="relative flex min-h-[95svh] items-center overflow-hidden sm:min-h-screen">
      {/* Background — image stays clear; readability comes from the text panel below */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover object-center ${mobileBgPosition ? MOBILE_BG_POSITION_CLASS[mobileBgPosition] ?? "" : ""}`}
          style={{ objectPosition: mobileBgPosition ? `var(--pagehero-bg-pos, ${bgPosition})` : bgPosition }}
        />
        {/* Mobile-only image dim (desktop/tablet keep the image full brightness) */}
        {mobileDimImage && <div className="absolute inset-0 bg-black/40 md:hidden" />}
        {/* Very subtle bottom fade only, so the hero blends into the page below */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      
      {/* Text layer — panel is positioned (left/top/bottom) on desktop, centered on mobile */}
      <div className="absolute inset-0 z-10 flex">
        <div className={`mx-auto w-full max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col ${MOBILE_JUSTIFY_CLASS} items-center py-10 sm:py-16 lg:py-20 ${vAlignClass} ${hAlignClass}${desktopJustify ? " " + DESKTOP_JUSTIFY_OVERRIDE[desktopJustify] : ""}${desktopAlign ? " " + DESKTOP_ALIGN_OVERRIDE[desktopAlign] : ""}`}>
        {/* Dark highlight panel behind the text only */}
        <div
          className={`w-full max-w-[calc(100vw-2rem)] sm:w-fit sm:max-w-full text-center break-words bg-black/55 border border-white/25 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-[2px] rounded-2xl p-4 sm:p-5 lg:px-8 lg:py-8 animate-fadeInUp ${panelOffset ? "md:absolute" : ""}`}
          style={{ maxWidth: panelWidth, ...(panelOffset ? { top: panelOffset.top, right: panelOffset.right, bottom: panelOffset.bottom, left: panelOffset.left } : {}) }}
        >
        {label && (
          <div className="mb-4 inline-flex items-center gap-3 animate-fadeInLeft">
            <span className="h-px w-8 bg-[var(--saffron)]/90" />
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--saffron)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--saffron)]" />
              {label}
            </span>
            <span className="h-px w-8 bg-[var(--saffron)]/90" />
          </div>
        )}
        <h1 className="font-[var(--font-poppins)] text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight max-w-xl animate-fadeInUp">
          {title}{" "}
          {titleHighlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#26ae90] to-[#f2f231]">{titleHighlight}</span>
          )}
        </h1>
        {subtitle && (
          <p className="text-white mt-4 sm:mt-6 text-xs sm:text-sm font-[var(--font-poppins)] font-medium">{subtitle}</p>
        )}
        {description && (
          <p className="text-[#f2f231] mt-4 sm:mt-6 text-xs sm:text-sm max-w-xl leading-relaxed">
            &quot;{Array.isArray(description) ? description.map((line, i) => (
              <span key={i}>{line}{i < description.length - 1 && <br />}</span>
            )) : description}&quot;
          </p>
        )}
        </div>
        </div>
      </div>
    </section>
  );
}
