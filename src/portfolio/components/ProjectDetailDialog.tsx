import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  FolderGit2,
  UserRound,
} from "lucide-react";
import type { Project } from "../types";
import { ProjectVisual } from "./ProjectVisual";

interface ProjectDetailDialogProps {
  project: Project | null;
  index?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailDialog({
  project,
  index = 0,
  open,
  onOpenChange,
}: ProjectDetailDialogProps) {
  if (!project) return null;

  const meta = [
    project.role && { icon: UserRound, label: project.role },
    project.year && { icon: CalendarDays, label: project.year },
  ].filter(Boolean) as { icon: typeof UserRound; label: string }[];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto gap-0 p-0">
        <ProjectVisual
          title={project.title}
          index={index}
          className="aspect-[16/9] border-b"
        />

        <div className="flex flex-col gap-5 p-6 sm:p-8">
          <DialogHeader className="gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full bg-ember font-mono text-[10px] font-semibold tracking-wider text-primary-foreground uppercase">
                Case study
              </Badge>
              {meta.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  <m.icon className="size-3 text-ember" />
                  {m.label}
                </span>
              ))}
            </div>
            <DialogTitle className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base leading-7 text-foreground/85">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          {project.overview && (
            <div>
              <h4 className="font-mono mb-2 text-xs font-semibold tracking-[0.2em] text-ember uppercase">
                Project overview
              </h4>
              <p className="text-sm leading-7 text-muted-foreground">
                {project.overview}
              </p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="font-mono mb-3 text-xs font-semibold tracking-[0.2em] text-ember uppercase">
                Key features
              </h4>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-card/60 p-3 text-sm text-foreground/80 transition-colors hover:border-ember/40"
                  >
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-ember/15 text-ember">
                      <Check className="size-2.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

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

          <div className="flex flex-wrap items-center gap-3 border-t border-border/70 pt-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
              >
                Visit live project
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 px-5 py-2.5 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:border-ember/60 hover:text-ember"
              >
                <FolderGit2 className="size-4" />
                Related build / dashboard
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
