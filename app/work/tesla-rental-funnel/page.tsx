import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Ad to signed contract in 14 days — Phillip Karaya",
  description:
    "How a designed ad, a Marketplace launch, and an applicant-scoring pipeline turned cold inbound into a signed, delivered rental in 14 days.",
};

const results = [
  { v: "$1,400/mo", l: "recurring revenue" },
  { v: "14 days", l: "from ad to delivered" },
  { v: "100%", l: "applicants auto-scored" },
];

const stack = ["Facebook Marketplace", "QR capture", "Google Forms", "Apps Script", "Google Sheets"];

const steps = [
  "A designed ad creative and a QR “Scan to apply” card that dropped applicants straight into a structured intake form.",
  "A Google Form captured the qualifying fields that actually predict a good renter: license, rideshare platform, availability, and timeline.",
  "An Apps Script scored each submission automatically and wrote a ranked row to a Sheet, with no manual triage.",
  "An 8am digest surfaced the strongest applicants each morning, so outreach went to the best leads first.",
];

function Section({
  label,
  accent,
  children,
}: {
  label: string;
  accent: "royal" | "red";
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-9 first:border-t-0 first:pt-0">
      <p
        className={`font-mono text-xs uppercase tracking-[0.18em] ${accent === "red" ? "text-red" : "text-royal"}`}
      >
        {label}
      </p>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink/80">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="bg-paper text-ink">
      <header className="bg-night text-white">
        <div className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="size-4" /> Back to work
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-royal-light">
            Case study · growth automation
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            Ad to signed contract in 14 days
          </h1>
          <p className="mt-5 max-w-[55ch] text-lg text-white/65">
            A single vehicle, a cold market, and a two-week clock. The constraint wasn’t demand, it
            was sorting real renters from noise fast enough to close.
          </p>
        </div>
      </header>

      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-3">
          {results.map((r) => (
            <div key={r.l}>
              <div className="font-display text-3xl font-bold text-royal">{r.v}</div>
              <div className="mt-1 text-sm text-muted">{r.l}</div>
            </div>
          ))}
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
        <Section label="The problem" accent="red">
          <p>
            The asset was a 2023 vehicle to be rented to gig drivers on a weekly plan. Inbound from a
            Marketplace listing is high-volume and low-signal: tire-kickers, bots, and the occasional
            serious renter, all in the same inbox. Hand-screening every message doesn’t scale, and a
            slow reply loses the good applicants to the next listing.
          </p>
        </Section>

        <Section label="The approach" accent="royal">
          <p>The build was a small, reliable pipeline rather than a clever model:</p>
          <ul className="space-y-3">
            {steps.map((t) => (
              <li key={t} className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-royal" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="The result" accent="red">
          <p>
            Within 14 days the pipeline took the listing from launch to a signed renter and a
            delivered vehicle, at roughly <strong className="font-medium text-ink">$1,400/month</strong>{" "}
            in recurring revenue. The scoring step meant the first conversations happened with the
            most qualified applicants, which is what compressed the timeline.
          </p>
        </Section>

        <Section label="Why it matters" accent="royal">
          <p>
            This is the forward-deployed pattern in miniature: a real business constraint, a fast
            end-to-end build across the tools the client already had, and a measurable outcome rather
            than a demo. The same shape (structured intake, automated scoring, a ranked action queue)
            is what most SMB lead, support, and ops problems actually need.
          </p>
        </Section>

        <div className="mt-10 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-royal px-5 py-3 text-sm font-medium text-white transition hover:bg-royal-dark"
          >
            Have a problem shaped like this? <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
