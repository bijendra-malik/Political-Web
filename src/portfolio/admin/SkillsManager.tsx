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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SKILL_CATEGORIES, type Skill } from "../types";

interface FormState {
  id?: string;
  name: string;
  level: number;
  category: string;
  order: number;
}

function toForm(skill?: Skill): FormState {
  return {
    id: skill?._id,
    name: skill?.name ?? "",
    level: skill?.level ?? 80,
    category: skill?.category ?? "Frontend",
    order: skill?.order ?? 0,
  };
}

export function SkillsManager({ skills }: { skills: Skill[] }) {
  const upsert = useMutation(api.portfolio.upsertSkill);
  const remove = useMutation(api.portfolio.deleteSkill);

  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<FormState>(toForm());

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const openCreate = () => {
    setForm({ ...toForm(), order: skills.length });
    setOpen(true);
  };

  const openEdit = (skill: Skill) => {
    setForm(toForm(skill));
    setOpen(true);
  };

  const handleSave = async () => {
    if (!form.name.trim()) {
      toast.error("Skill name is required");
      return;
    }
    setSaving(true);
    try {
      await upsert({
        id: form.id as never,
        name: form.name.trim(),
        level: Math.min(100, Math.max(0, form.level)),
        category: form.category,
        order: form.order,
      });
      toast.success(form.id ? "Skill updated" : "Skill added");
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
      toast.success("Skill deleted");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to delete");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {skills.length} skills shown on the site
        </p>
        <Button size="sm" onClick={openCreate} className="rounded-full">
          <Plus className="mr-1.5 size-4" /> Add skill
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-ember/40"
          >
            <div className="min-w-0">
              <p className="font-medium">{skill.name}</p>
              <div className="mt-1.5 flex items-center gap-3">
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-ember"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  {skill.level}%
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="hidden rounded-full bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground sm:block">
                {skill.category}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-8"
                onClick={() => openEdit(skill)}
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
                    <AlertDialogTitle>Delete this skill?</AlertDialogTitle>
                    <AlertDialogDescription>
                      &ldquo;{skill.name}&rdquo; will be removed from your
                      skills section. This cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => skill._id && handleDelete(skill._id)}
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
        {skills.length === 0 && (
          <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground sm:col-span-2">
            No skills yet — add your first one.
          </p>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{form.id ? "Edit skill" : "Add skill"}</DialogTitle>
            <DialogDescription>
              Skills are grouped by category and shown with a proficiency bar.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="skill-name">Name *</Label>
              <Input
                id="skill-name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="TypeScript"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="skill-category">Category</Label>
                <Select
                  value={form.category}
                  onValueChange={(value) => set("category", value)}
                >
                  <SelectTrigger id="skill-category" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SKILL_CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="skill-level">
                  Level <span className="text-muted-foreground">(0–100)</span>
                </Label>
                <Input
                  id="skill-level"
                  type="number"
                  min={0}
                  max={100}
                  value={form.level}
                  onChange={(e) => set("level", Number(e.target.value))}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="skill-order">Order</Label>
              <Input
                id="skill-order"
                type="number"
                value={form.order}
                onChange={(e) => set("order", Number(e.target.value))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleSave} disabled={saving}>
              {saving ? "Saving…" : form.id ? "Save changes" : "Add skill"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
