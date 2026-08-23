import type { ExperienceEntry } from "../types";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Experience({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="Places I've called home."
          description="Eight-plus years across startups and enterprises — leading teams, owning architecture, and shipping products people love."
        />

        <div className="flex flex-col">
          {entries.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.period}`} delay={index * 0.08}>
              <ExperienceTimeline
                entry={entry}
                isLast={index === entries.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
