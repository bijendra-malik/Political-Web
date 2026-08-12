import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        align === "center" && "items-center text-center",
      )}
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-ember">
        <span className="text-foreground/40">{index}</span>
        <span className="h-px w-8 bg-ember/60" />
        {eyebrow}
      </span>
      <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}
