import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Globe,
  Server,
  Shield,
  RefreshCw,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Settings,
  Copy,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface DomainEntry {
  domain: string;
  registrar: string;
  status: "active" | "pending" | "expired";
  expiresAt: string;
  nameservers: string[];
}

interface HostingEntry {
  provider: string;
  plan: string;
  status: "active" | "suspended" | "pending";
  serverIp: string;
  diskUsage: string;
  bandwidth: string;
}

const DEFAULT_DOMAINS: DomainEntry[] = [
  {
    domain: "indexiagroup.com",
    registrar: "Hostinger",
    status: "active",
    expiresAt: "2027-01-15",
    nameservers: [
      "ns1.hostinger.com",
      "ns2.hostinger.com",
    ],
  },
];

const DEFAULT_HOSTING: HostingEntry[] = [
  {
    provider: "Hostinger",
    plan: "Business Web Hosting",
    status: "active",
    serverIp: "—",
    diskUsage: "—",
    bandwidth: "Unlimited",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles =
    status === "active"
      ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
      : status === "pending"
        ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
        : "bg-red-500/15 text-red-600 dark:text-red-400";

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${styles}`}>
      {status === "active" ? (
        <CheckCircle2 className="size-3" />
      ) : (
        <AlertCircle className="size-3" />
      )}
      {status}
    </span>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/30 px-3 py-2">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="font-mono text-xs font-medium">{value}</span>
    </div>
  );
}

export function HostingManager() {
  const [domains, setDomains] = useState<DomainEntry[]>(DEFAULT_DOMAINS);
  const [hosting] = useState<HostingEntry[]>(DEFAULT_HOSTING);
  const [newDomain, setNewDomain] = useState("");
  const [addingDomain, setAddingDomain] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard");
    });
  };

  const handleAddDomain = () => {
    if (!newDomain.trim()) {
      toast.error("Enter a domain name");
      return;
    }
    setAddingDomain(true);
    setTimeout(() => {
      setDomains((prev) => [
        ...prev,
        {
          domain: newDomain.trim(),
          registrar: "Hostinger",
          status: "pending",
          expiresAt: "—",
          nameservers: ["ns1.hostinger.com", "ns2.hostinger.com"],
        },
      ]);
      setNewDomain("");
      setAddingDomain(false);
      toast.success("Domain added — update nameservers at your registrar");
    }, 600);
  };

  return (
    <div className="grid gap-6">
      {/* Domains */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base">
            <Globe className="size-4 text-ember" />
            Domains
          </CardTitle>
          <CardDescription>
            Manage domains linked to your portfolio. DNS must point to your
            Hostinger hosting server.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {domains.map((d) => (
            <div
              key={d.domain}
              className="rounded-xl border border-border/60 p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-display text-sm font-semibold">
                    {d.domain}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Registrar: {d.registrar}
                  </p>
                </div>
                <StatusBadge status={d.status} />
              </div>

              <div className="mt-3 grid gap-1.5">
                <InfoRow label="Expires" value={d.expiresAt} />
                <InfoRow label="NS 1" value={d.nameservers[0] ?? "—"} />
                <InfoRow label="NS 2" value={d.nameservers[1] ?? "—"} />
              </div>

              <div className="mt-3 flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  onClick={() => handleCopy(d.domain)}
                >
                  <Copy className="mr-1 size-3" /> Copy
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  asChild
                >
                  <a
                    href={`https://${d.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1 size-3" /> Visit
                  </a>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  asChild
                >
                  <a
                    href="https://hpanel.hostinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Settings className="mr-1 size-3" /> Hostinger Panel
                  </a>
                </Button>
              </div>
            </div>
          ))}

          {/* Add new domain */}
          <div className="flex gap-2">
            <Input
              placeholder="example.com"
              value={newDomain}
              onChange={(e) => setNewDomain(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddDomain()}
              className="flex-1 rounded-full text-sm"
            />
            <Button
              type="button"
              onClick={handleAddDomain}
              disabled={addingDomain}
              className="rounded-full"
            >
              {addingDomain ? "Adding…" : "Add domain"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Hosting */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base">
            <Server className="size-4 text-ember" />
            Hosting
          </CardTitle>
          <CardDescription>
            Your Hostinger hosting plan details and server information.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {hosting.map((h) => (
            <div
              key={h.provider}
              className="rounded-xl border border-border/60 p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-display text-sm font-semibold">
                    {h.provider}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {h.plan}
                  </p>
                </div>
                <StatusBadge status={h.status} />
              </div>

              <div className="mt-3 grid gap-1.5">
                <InfoRow label="Server IP" value={h.serverIp} />
                <InfoRow label="Disk Usage" value={h.diskUsage} />
                <InfoRow label="Bandwidth" value={h.bandwidth} />
              </div>

              <div className="mt-3 flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  asChild
                >
                  <a
                    href="https://hpanel.hostinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1 size-3" /> Manage on Hostinger
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Setup Guide */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base">
            <Shield className="size-4 text-ember" />
            Quick Setup Guide
          </CardTitle>
          <CardDescription>
            Steps to get your portfolio live on your domain via Hostinger.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="grid gap-3 text-sm">
            {[
              {
                step: 1,
                title: "Point DNS to Hostinger",
                desc: "Set your domain's nameservers to ns1.hostinger.com and ns2.hostinger.com at your registrar.",
              },
              {
                step: 2,
                title: "Upload files via hPanel",
                desc: "Go to Hostinger hPanel → Files → File Manager and upload your built project to the public_html folder.",
              },
              {
                step: 3,
                title: "Enable SSL",
                desc: "In hPanel → SSL, enable Free SSL for your domain to get HTTPS working.",
              },
              {
                step: 4,
                title: "Configure redirect",
                desc: "Set up www → non-www (or vice versa) redirect in Hostinger's Redirects section.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex items-start gap-3 rounded-xl border border-border/50 bg-muted/30 p-3"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ember/15 text-xs font-bold text-ember">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-4 flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-full text-xs"
              asChild
            >
              <a
                href="https://hpanel.hostinger.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RefreshCw className="mr-1 size-3" /> Open Hostinger hPanel
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-full text-xs"
              asChild
            >
              <a
                href="https://www.hostinger.com/tutorials"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1 size-3" /> Hostinger Tutorials
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
