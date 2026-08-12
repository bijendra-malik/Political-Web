import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import type { Project } from "../types";
import { ProjectVisual } from "./ProjectVisual";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index = 0, onOpen }: ProjectCardProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project);
        }
      }}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-[0_20px_60px_-20px_color-mix(in_oklch,var(--ember)_35%,transparent)] focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative">
        <ProjectVisual title={project.title} index={index} className="aspect-[16/10]" />
        {/* View-details hint */}
        <span className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-[11px] font-semibold text-foreground/80 opacity-0 backdrop-blur transition-all duration-300 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100">
          View details <ArrowUpRight className="size-3.5 text-ember" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full font-mono text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-ember">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-1.5 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              Live demo <ArrowUpRight className="size-3.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 px-3.5 py-1.5 text-xs font-semibold text-foreground/80 transition-all duration-300 hover:border-ember/60 hover:text-ember"
            >
              <FolderGit2 className="size-3.5" /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
