import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Project } from "../types";

interface FormState {
  id?: string;
  title: string;
  description: string;
  tags: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  order: number;
}

function toForm(project?: Project): FormState {
  return {
    id: project?._id,
    title: project?.title ?? "",
    description: project?.description ?? "",
    tags: project?.tags.join(", ") ?? "",
    image: project?.image ?? "",
    liveUrl: project?.liveUrl ?? "",
    repoUrl: project?.repoUrl ?? "",
    featured: project?.featured ?? false,
    order: project?.order ?? 0,
  };
}

export function ProjectsManager({ projects }: { projects: Project[] }) {
  const upsert = useMutation(api.portfolio.upsertProject);
  const remove = useMutation(api.portfolio.deleteProject);

  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<FormState>(toForm());

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const openCreate = () => {
    setForm(toForm({ ...toForm(), order: projects.length }));
    setOpen(true);
  };

  const openEdit = (project: Project) => {
    setForm(toForm(project));
    setOpen(true);
  };

  const handleSave = async () => {
    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }
    setSaving(true);
    try {
      await upsert({
        id: form.id as never,
        title: form.title.trim(),
        description: form.description.trim(),
        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        image: form.image.trim() || undefined,
        liveUrl: form.liveUrl.trim() || undefined,
        repoUrl: form.repoUrl.trim() || undefined,
        featured: form.featured,
        order: form.order,
      });
      toast.success(form.id ? "Project updated" : "Project added");
      setOpen(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await remove({ id: id as never });
      toast.success("Project deleted");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to delete");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {projects.length} project{projects.length === 1 ? "" : "s"} shown on
          the site
        </p>
        <Button size="sm" onClick={openCreate} className="rounded-full">
          <Plus className="mr-1.5 size-4" /> Add project
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-ember/40"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display font-semibold">{project.title}</p>
                {project.featured && (
                  <Badge className="rounded-full bg-ember px-2 py-0.5 font-mono text-[10px] text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 gap-1.5">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-8"
                onClick={() => openEdit(project)}
              >
                <Pencil className="size-3.5" />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="size-8 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete this project?</AlertDialogTitle>
                    <AlertDialogDescription>
                      &ldquo;{project.title}&rdquo; will be removed from your
                      portfolio. This cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => project._id && handleDelete(project._id)}
                      className="bg-destructive text-white hover:bg-destructive/90"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
            No projects yet — add your first one.
          </p>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{form.id ? "Edit project" : "Add project"}</DialogTitle>
            <DialogDescription>
              Projects appear in the Work section of your portfolio.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="project-title">Title *</Label>
              <Input
                id="project-title"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                placeholder="Nebula Commerce"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="project-desc">Description</Label>
              <Textarea
                id="project-desc"
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                placeholder="What did you build and what was the impact?"
                rows={4}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="project-tags">
                Tags <span className="text-muted-foreground">(comma separated)</span>
              </Label>
              <Input
                id="project-tags"
                value={form.tags}
                onChange={(e) => set("tags", e.target.value)}
                placeholder="React, TypeScript, Node.js"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="project-image">Image URL (optional)</Label>
              <Input
                id="project-image"
                value={form.image}
                onChange={(e) => set("image", e.target.value)}
                placeholder="https://..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="project-live">Live URL</Label>
                <Input
                  id="project-live"
                  value={form.liveUrl}
                  onChange={(e) => set("liveUrl", e.target.value)}
                  placeholder="https://..."
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="project-repo">Repo URL</Label>
                <Input
                  id="project-repo"
                  value={form.repoUrl}
                  onChange={(e) => set("repoUrl", e.target.value)}
                  placeholder="https://github.com/..."
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex items-center gap-3">
                <Switch
                  id="project-featured"
                  checked={form.featured}
                  onCheckedChange={(checked) => set("featured", checked)}
                />
                <Label htmlFor="project-featured">Featured (spotlight card)</Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="project-order">Order</Label>
                <Input
                  id="project-order"
                  type="number"
                  value={form.order}
                  onChange={(e) => set("order", Number(e.target.value))}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="button" onClick={handleSave} disabled={saving}>
              {saving ? "Saving…" : form.id ? "Save changes" : "Add project"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
