import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "../types";
import { MeteorImpactBorder } from "../components/MeteorImpactBorder";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetailDialog } from "../components/ProjectDetailDialog";
import { ProjectVisual } from "../components/ProjectVisual";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Projects({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="relative scroll-mt-24 border-t border-border/60 bg-card/30 py-24 md:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Selected work"
          title="Projects that moved the needle."
          description="A mix of flagship builds and the ones I'm proudest of — click any project to see the full case study, tech stack, and what it does."
        />

        {/* Featured spotlight */}
        <div className="mb-14 flex flex-col gap-10">
          {featured.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <MeteorImpactBorder glowColor="var(--ember, #f59e0b)" speed={5} className="rounded-3xl">
              <article
                role="button"
                tabIndex={0}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
                className="group grid cursor-pointer overflow-hidden rounded-3xl border border-border/50 bg-card transition-all duration-500 hover:border-ember/50 hover:shadow-[0_24px_80px_-24px_color-mix(in_oklch,var(--ember)_35%,transparent)] focus-visible:ring-2 focus-visible:ring-ring lg:grid-cols-2"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <ProjectVisual
                    title={project.title}
                    index={index}
                    className="aspect-[16/10] border-b lg:aspect-auto lg:h-full lg:border-r lg:border-b-0"
                  />
                </div>
                <div className="flex flex-col gap-4 p-7 sm:p-10 lg:justify-center">
                  <span className="font-mono text-xs tracking-[0.2em] text-ember uppercase">
                    Featured project
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-ember sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full font-mono text-[11px] font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ember transition-all duration-300 group-hover:gap-2.5">
                      View case study <ArrowUpRight className="size-4" />
                    </span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-foreground"
                      >
                        Visit live site <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
              </MeteorImpactBorder>
            </Reveal>
          ))}
        </div>

        {/* Remaining projects */}
        {rest.length > 0 && (
          <>
            <Reveal className="mb-8">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                More experiments &amp; side quests
              </h3>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project, index) => (
                <Reveal key={project.title} delay={(index % 3) * 0.08}>
                  <ProjectCard
                    project={project}
                    index={featured.length + index}
                    onOpen={setSelected}
                  />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>

      <ProjectDetailDialog
        project={selected}
        index={selected ? projects.findIndex((p) => p.title === selected.title) : 0}
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      />
    </section>
  );
}
