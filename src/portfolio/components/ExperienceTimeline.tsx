import { Badge } from "@/components/ui/badge";
import { Briefcase, Sparkle } from "lucide-react";
import type { ExperienceEntry } from "../types";

export function ExperienceTimeline({
  entry,
  isLast = false,
}: {
  entry: ExperienceEntry;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex gap-5 sm:gap-8">
      {/* Timeline rail */}
      <div className="flex flex-col items-center">
        <span className="relative z-10 mt-1.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-ember/50 bg-ember/10 text-ember transition-all duration-300 group-hover:bg-ember group-hover:text-primary-foreground">
          <Briefcase className="size-4" />
          {entry.current && (
            <span className="absolute -top-0.5 -right-0.5 size-2.5 animate-pulse rounded-full bg-ember" />
          )}
        </span>
        {!isLast && (
          <span className="w-px flex-1 bg-gradient-to-b from-ember/40 via-border to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="group flex-1 pb-10">
        <div className="rounded-2xl border border-border/60 bg-card/50 p-5 transition-all duration-300 group-hover:border-ember/40 group-hover:bg-card sm:p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              {entry.role}
            </h3>
            {entry.current && (
              <Badge className="rounded-full bg-ember px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                Current
              </Badge>
            )}
          </div>
          <p className="mt-0.5 text-sm font-medium text-ember">
            {entry.company}
          </p>
          <p className="mt-1 font-mono text-xs tracking-wide text-muted-foreground">
            {entry.period}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {entry.description}
          </p>
          {entry.highlights.length > 0 && (
            <ul className="mt-4 space-y-2">
              {entry.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-foreground/75"
                >
                  <Sparkle className="mt-0.5 size-3.5 shrink-0 text-ember" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
