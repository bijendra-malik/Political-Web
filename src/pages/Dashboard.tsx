import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { useAppearance } from "@/portfolio/hooks/use-appearance";
import { EducationManager } from "@/portfolio/admin/EducationManager";
import { ExperienceManager } from "@/portfolio/admin/ExperienceManager";
import { ProfileManager } from "@/portfolio/admin/ProfileManager";
import { ProjectsManager } from "@/portfolio/admin/ProjectsManager";
import { SkillsManager } from "@/portfolio/admin/SkillsManager";
import { useMutation, useQuery } from "convex/react";
import {
  Briefcase,
  ExternalLink,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Palette,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const data = useQuery(api.portfolio.getPortfolio);
  const seed = useMutation(api.portfolio.seedPortfolio);
  const [seeding, setSeeding] = useState(false);

  useAppearance(data?.profile);

  const isEmpty = data !== undefined && !data.profile;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleSeed = async () => {
    setSeeding(true);
    try {
      await seed();
      toast.success("Sample content loaded — edit it from the tabs below");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to load");
    } finally {
      setSeeding(false);
    }
  };

  const tabs = [
    {
      value: "projects",
      label: "Projects",
      icon: Sparkles,
      content: <ProjectsManager projects={data?.projects ?? []} />,
    },
    {
      value: "experience",
      label: "Experience",
      icon: Briefcase,
      content: <ExperienceManager entries={data?.experience ?? []} />,
    },
    {
      value: "education",
      label: "Education",
      icon: GraduationCap,
      content: <EducationManager entries={data?.education ?? []} />,
    },
    {
      value: "skills",
      label: "Skills",
      icon: Wrench,
      content: <SkillsManager skills={data?.skills ?? []} />,
    },
    {
      value: "profile",
      label: "Profile & Theme",
      icon: Palette,
      content: <ProfileManager profile={data?.profile} />,
    },
  ];

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 md:py-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs font-medium tracking-widest text-ember uppercase">
              Portfolio admin
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome{user?.name ? `, ${user.name}` : ""}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage everything shown on your public portfolio — it updates the
              live site instantly.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer gap-2"
              onClick={() => navigate("/")}
            >
              <ExternalLink className="size-4" />
              View site
            </Button>
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer gap-2"
              onClick={handleSignOut}
            >
              <LogOut className="size-4" />
              Sign out
            </Button>
          </div>
        </header>

        {/* Seed banner when the database has no content yet */}
        {isEmpty && (
          <Card className="border-ember/40 bg-gradient-to-br from-ember/10 via-transparent to-transparent">
            <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ember/15 text-ember">
                  <Rocket className="size-5" />
                </div>
                <div>
                  <p className="font-semibold">
                    Your site is showing sample content
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Load a starter portfolio into the database, then edit every
                    section below with your own details.
                  </p>
                </div>
              </div>
              <Button
                type="button"
                onClick={handleSeed}
                disabled={seeding}
                className="shrink-0 rounded-full"
              >
                <Rocket className="mr-2 size-4" />
                {seeding ? "Loading…" : "Load sample content"}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Tabs */}
        <Tabs defaultValue="projects">
          <TabsList className="h-auto flex-wrap justify-start gap-1 rounded-2xl bg-muted/60 p-1.5">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="gap-2 rounded-xl px-3.5 py-2 data-[state=active]:bg-card"
              >
                <tab.icon className="size-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-6">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>

        <footer className="flex items-center gap-2 pb-4 text-xs text-muted-foreground">
          <LayoutDashboard className="size-3.5" />
          Changes save to your Convex database and appear on the landing page
          immediately.
        </footer>
      </div>
    </main>
  );
}
