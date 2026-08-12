import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectVisual } from "../components/ProjectVisual";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Projects({ projects }: { projects: Project[] }) {
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
          description="A mix of flagship builds and the ones I'm proudest of — each shipped end-to-end, from first wireframe to production."
        />

        {/* Featured spotlight */}
        <div className="mb-14 flex flex-col gap-10">
          {featured.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className="group grid overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-500 hover:border-ember/50 hover:shadow-[0_24px_80px_-24px_color-mix(in_oklch,var(--ember)_35%,transparent)] lg:grid-cols-2">
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
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ember transition-all duration-300 hover:gap-2.5"
                      >
                        View live site <ArrowUpRight className="size-4" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-foreground"
                      >
                        Source code <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
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
                  <ProjectCard project={project} index={featured.length + index} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
