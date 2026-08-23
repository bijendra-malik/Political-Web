import { GraduationCap, MapPin } from "lucide-react";
import type { EducationEntry } from "../types";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Education({ entries }: { entries: EducationEntry[] }) {
  return (
    <section id="education" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="Education"
          title="Where I learned what I know."
          description="Formal education in computer science — building the foundation for everything I ship."
        />

        <div className="flex flex-col">
          {entries.map((entry, index) => (
            <Reveal key={`${entry.institution}-${entry.period}`} delay={index * 0.08}>
              <EducationCard entry={entry} isLast={index === entries.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({
  entry,
  isLast = false,
}: {
  entry: EducationEntry;
  isLast?: boolean;
}) {
  return (
    <div className="group relative flex gap-5 sm:gap-8">
      {/* Timeline rail */}
      <div className="flex flex-col items-center">
        <span className="relative z-10 mt-1.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-ember/50 bg-ember/10 text-ember transition-all duration-300 group-hover:bg-ember group-hover:text-primary-foreground">
          <GraduationCap className="size-4" />
        </span>
        {!isLast && (
          <span className="w-px flex-1 bg-gradient-to-b from-ember/40 via-border to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <div className="rounded-2xl border border-border/60 bg-card/50 p-5 transition-all duration-300 group-hover:border-ember/40 group-hover:bg-card sm:p-6">
          <h3 className="font-display text-lg font-semibold tracking-tight">
            {entry.institution}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-ember">
            {entry.degree}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-xs tracking-wide text-muted-foreground">
              {entry.period}
            </span>
            {entry.location && (
              <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                <MapPin className="size-3" /> {entry.location}
              </span>
            )}
          </div>
          {entry.details && (
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {entry.details}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
