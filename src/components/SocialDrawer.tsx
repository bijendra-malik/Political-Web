"use client";

export default function SocialDrawer() {
  return (
    <a
      href="#home"
      className="fixed bottom-6 right-6 w-11 h-11 bg-[#f2f231] hover:bg-[#d4d420] text-[#066a9c] rounded-full flex items-center justify-center shadow-lg shadow-[#f2f231]/30 hover:-translate-y-1 transition-all z-50"
      aria-label="Back to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </a>
  );
}
