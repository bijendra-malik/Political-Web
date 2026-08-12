import { motion } from "framer-motion";
import { CursorGlow } from "@/portfolio/components/CursorGlow";
import { Footer } from "@/portfolio/components/Footer";
import { Marquee } from "@/portfolio/components/Marquee";
import { Navbar } from "@/portfolio/components/Navbar";
import { usePortfolio } from "@/portfolio/hooks/use-portfolio";
import { About } from "@/portfolio/sections/About";
import { Contact } from "@/portfolio/sections/Contact";
import { Experience } from "@/portfolio/sections/Experience";
import { Hero } from "@/portfolio/sections/Hero";
import { Projects } from "@/portfolio/sections/Projects";
import { Skills } from "@/portfolio/sections/Skills";

export default function Landing() {
  const { profile, projects, experience, skills } = usePortfolio();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-screen scroll-smooth bg-background text-foreground antialiased"
    >
      <CursorGlow />
      <Navbar profile={profile} />

      <main>
        <Hero profile={profile} />
        <Marquee items={skills.map((skill) => skill.name)} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Experience entries={experience} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />
    </motion.div>
  );
}
