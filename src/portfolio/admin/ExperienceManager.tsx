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
import { Briefcase, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { ExperienceEntry } from "../types";

interface FormState {
  id?: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string;
  current: boolean;
  order: number;
}

function toForm(entry?: ExperienceEntry): FormState {
  return {
    id: entry?._id,
    role: entry?.role ?? "",
    company: entry?.company ?? "",
    period: entry?.period ?? "",
    description: entry?.description ?? "",
    highlights: entry?.highlights.join("\n") ?? "",
    current: entry?.current ?? false,
    order: entry?.order ?? 0,
  };
}

export function ExperienceManager({ entries }: { entries: ExperienceEntry[] }) {
  const upsert = useMutation(api.portfolio.upsertExperience);
  const remove = useMutation(api.portfolio.deleteExperience);

  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<FormState>(toForm());

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const openCreate = () => {
    setForm({ ...toForm(), order: entries.length });
    setOpen(true);
  };

  const openEdit = (entry: ExperienceEntry) => {
    setForm(toForm(entry));
    setOpen(true);
  };

  const handleSave = async () => {
    if (!form.role.trim() || !form.company.trim()) {
      toast.error("Role and company are required");
      return;
    }
    setSaving(true);
    try {
      await upsert({
        id: form.id as never,
        role: form.role.trim(),
        company: form.company.trim(),
        period: form.period.trim(),
        description: form.description.trim(),
        highlights: form.highlights
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
        current: form.current,
        order: form.order,
      });
      toast.success(form.id ? "Experience updated" : "Experience added");
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
      toast.success("Experience entry deleted");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to delete");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {entries.length} position{entries.length === 1 ? "" : "s"} in the
          timeline
        </p>
        <Button size="sm" onClick={openCreate} className="rounded-full">
          <Plus className="mr-1.5 size-4" /> Add position
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {entries.map((entry) => (
          <div
            key={entry._id}
            className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-ember/40"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Briefcase className="size-4 text-ember" />
                <p className="font-display font-semibold">{entry.role}</p>
                {entry.current && (
                  <Badge className="rounded-full bg-ember px-2 py-0.5 font-mono text-[10px] text-primary-foreground">
                    Current
                  </Badge>
                )}
              </div>
              <p className="mt-0.5 text-sm font-medium text-ember">
                {entry.company}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {entry.period}
              </p>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {entry.description}
              </p>
            </div>
            <div className="flex shrink-0 gap-1.5">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-8"
                onClick={() => openEdit(entry)}
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
                    <AlertDialogTitle>Delete this position?</AlertDialogTitle>
                    <AlertDialogDescription>
                      &ldquo;{entry.role} at {entry.company}&rdquo; will be
                      removed from your timeline. This cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => entry._id && handleDelete(entry._id)}
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
        {entries.length === 0 && (
          <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
            No experience yet — add your first position.
          </p>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{form.id ? "Edit position" : "Add position"}</DialogTitle>
            <DialogDescription>
              Entries appear in the Experience timeline of your portfolio.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="exp-role">Role *</Label>
                <Input
                  id="exp-role"
                  value={form.role}
                  onChange={(e) => set("role", e.target.value)}
                  placeholder="Senior Frontend Engineer"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="exp-company">Company *</Label>
                <Input
                  id="exp-company"
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder="Cloudly Systems"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="exp-period">Period</Label>
              <Input
                id="exp-period"
                value={form.period}
                onChange={(e) => set("period", e.target.value)}
                placeholder="2019 — 2022"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="exp-desc">Description</Label>
              <Textarea
                id="exp-desc"
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                placeholder="What did you do in one or two sentences?"
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="exp-highlights">
                Key highlights{" "}
                <span className="text-muted-foreground">(one per line)</span>
              </Label>
              <Textarea
                id="exp-highlights"
                value={form.highlights}
                onChange={(e) => set("highlights", e.target.value)}
                placeholder={"Shipped a new checkout that raised conversions\nMentored 4 engineers"}
                rows={4}
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex items-center gap-3">
                <Switch
                  id="exp-current"
                  checked={form.current}
                  onCheckedChange={(checked) => set("current", checked)}
                />
                <Label htmlFor="exp-current">Current role</Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="exp-order">Order</Label>
                <Input
                  id="exp-order"
                  type="number"
                  value={form.order}
                  onChange={(e) => set("order", Number(e.target.value))}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleSave} disabled={saving}>
              {saving ? "Saving…" : form.id ? "Save changes" : "Add position"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
