import { motion } from "framer-motion";
import { useMemo } from "react";
import type { Skill } from "../types";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium transition-colors duration-300 group-hover:text-ember">
          {skill.name}
        </span>
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-ember/70 to-ember"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
        />
      </div>
    </div>
  );
}

export function Skills({ skills }: { skills: Skill[] }) {
  const grouped = useMemo(() => {
    const map = new Map<string, Skill[]>();
    for (const skill of skills) {
      const list = map.get(skill.category) ?? [];
      list.push(skill);
      map.set(skill.category, list);
    }
    return Array.from(map.entries());
  }, [skills]);

  return (
    <section id="skills" className="relative scroll-mt-24 border-y border-border/60 bg-card/30 py-24 md:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="A toolkit refined over 8+ years."
          description="Deep expertise across the full stack — from design systems and frontend architecture to backend services and cloud infrastructure."
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {grouped.map(([category, categorySkills], groupIndex) => (
            <Reveal key={category} delay={groupIndex * 0.1}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/40">
                <span className="font-mono inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-ember uppercase">
                  <span className="h-px w-5 bg-ember/60" />
                  {category}
                </span>
                <div className="flex flex-col gap-5">
                  {categorySkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
