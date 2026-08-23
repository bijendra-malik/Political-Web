import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Pencil, Plus, Trash2 } from "lucide-react";
import type { EducationEntry } from "../types";

interface EducationManagerProps {
  entries: EducationEntry[];
}

const EMPTY = {
  institution: "",
  degree: "",
  period: "",
  location: "",
  details: "",
};

export function EducationManager({ entries }: EducationManagerProps) {
  const upsert = useMutation(api.portfolio.upsertEducation);
  const remove = useMutation(api.portfolio.deleteEducation);

  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY);
  const [showForm, setShowForm] = useState(false);

  const startNew = () => {
    setEditing(null);
    setForm(EMPTY);
    setShowForm(true);
  };

  const startEdit = (entry: EducationEntry) => {
    setEditing(entry._id!);
    setForm({
      institution: entry.institution,
      degree: entry.degree,
      period: entry.period,
      location: entry.location ?? "",
      details: entry.details ?? "",
    });
    setShowForm(true);
  };

  const save = async () => {
    await upsert({
      ...(editing ? { id: editing as any } : {}),
      institution: form.institution,
      degree: form.degree,
      period: form.period,
      location: form.location || undefined,
      details: form.details || undefined,
      order: editing
        ? entries.find((e) => e._id === editing)?.order ?? entries.length
        : entries.length,
    });
    setForm(EMPTY);
    setEditing(null);
    setShowForm(false);
  };

  const del = async (id: string) => {
    if (!confirm("Delete this education entry?")) return;
    await remove({ id: id as any });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold">Education</h3>
        <Button size="sm" onClick={startNew}>
          <Plus className="mr-1 size-3.5" /> Add
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">
              {editing ? "Edit Education" : "New Education"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              placeholder="Institution name"
              value={form.institution}
              onChange={(e) => setForm({ ...form, institution: e.target.value })}
            />
            <Input
              placeholder="Degree / Program"
              value={form.degree}
              onChange={(e) => setForm({ ...form, degree: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                placeholder="Period (e.g. 2024 — 2026)"
                value={form.period}
                onChange={(e) => setForm({ ...form, period: e.target.value })}
              />
              <Input
                placeholder="Location (optional)"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </div>
            <Textarea
              placeholder="Details (optional)"
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              rows={2}
            />
            <div className="flex gap-2">
              <Button size="sm" onClick={save}>
                Save
              </Button>
              <Button size="sm" variant="ghost" onClick={() => { setShowForm(false); setEditing(null); }}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-3">
        {entries.map((entry) => (
          <div
            key={entry._id}
            className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/50 p-4"
          >
            <GraduationCap className="mt-0.5 size-4 shrink-0 text-ember" />
            <div className="flex-1 min-w-0">
              <p className="font-medium">{entry.institution}</p>
              <p className="text-sm text-ember">{entry.degree}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {entry.period}
                {entry.location ? ` · ${entry.location}` : ""}
              </p>
            </div>
            <div className="flex gap-1">
              <Button size="icon" variant="ghost" className="size-8" onClick={() => startEdit(entry)}>
                <Pencil className="size-3.5" />
              </Button>
              <Button size="icon" variant="ghost" className="size-8 text-destructive" onClick={() => del(entry._id!)}>
                <Trash2 className="size-3.5" />
              </Button>
            </div>
          </div>
        ))}
        {entries.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-8">
            No education entries yet. Add your first one above.
          </p>
        )}
      </div>
    </div>
  );
}
