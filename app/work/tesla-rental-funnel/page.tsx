import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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

const workflow = [
  {
    n: "1",
    stage: "Create",
    title: "Ad creative + QR apply card",
    detail:
      "Designed the listing creative and a printed “Scan to apply” QR card, so interest could convert on the spot instead of starting a DM thread.",
    tool: "Design",
    accent: "royal" as const,
  },
  {
    n: "2",
    stage: "Launch",
    title: "Facebook Marketplace listing",
    detail:
      "Listed the weekly unlimited-miles plan; one keyword (DRIVE) routed every inbound message into the same funnel.",
    tool: "FB Marketplace",
    accent: "royal" as const,
  },
  {
    n: "3",
    stage: "Capture",
    title: "Structured intake form",
    detail:
      "QR scans and replies dropped applicants into a Google Form capturing the fields that matter: license, rideshare platform, availability, and timeline.",
    tool: "Google Forms",
    accent: "royal" as const,
  },
  {
    n: "4",
    stage: "Score",
    title: "Automatic applicant scoring",
    detail:
      "An Apps Script scored every submission against the signals that predict a reliable renter and wrote a ranked row to a Sheet, with zero manual triage.",
    tool: "Apps Script",
    accent: "red" as const,
  },
  {
    n: "5",
    stage: "Surface",
    title: "8am ranked digest",
    detail:
      "Each morning the highest-scoring applicants arrived in an email digest, so outreach always started with the best leads, not the loudest.",
    tool: "Sheets + email",
    accent: "red" as const,
  },
  {
    n: "6",
    stage: "Close",
    title: "Signed and delivered",
    detail:
      "Best-fit applicants were screened and closed first. Contract signed and the car delivered inside the two-week window.",
    tool: "Outcome",
    accent: "royal" as const,
  },
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

function WorkflowDiagram() {
  return (
    <ol className="relative mt-2">
      {workflow.map((s, i) => (
        <li key={s.n} className="relative flex gap-4 pb-7 last:pb-0">
          {i < workflow.length - 1 && (
            <span
              aria-hidden
              className="absolute left-4 top-9 -ml-px h-[calc(100%-1rem)] w-px bg-line"
            />
          )}
          <span
            className={`relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-medium text-white ${s.accent === "red" ? "bg-red" : "bg-royal"}`}
          >
            {s.n}
          </span>
          <div className="pt-0.5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span
                className={`font-mono text-[11px] uppercase tracking-wide ${s.accent === "red" ? "text-red" : "text-royal"}`}
              >
                {s.stage}
              </span>
              <span className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] text-muted">
                {s.tool}
              </span>
            </div>
            <h3 className="mt-1 font-display text-lg font-bold tracking-tight">{s.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{s.detail}</p>
          </div>
        </li>
      ))}
    </ol>
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
            The asset was a 2023 vehicle offered to gig drivers on a flat weekly plan with unlimited
            miles. Demand was never the issue. A Marketplace listing for a deal like that draws a
            flood of inbound, and almost all of it is noise: tire-kickers, bots, lowballers, and the
            occasional serious renter, all in one inbox.
          </p>
          <p>
            Hand-screening every message does not scale, and on Marketplace speed wins, because a
            slow reply loses the good applicant to the next listing. The real constraint was triage:
            find the few renters who would actually qualify and close, fast enough to put the car to
            work inside two weeks.
          </p>
        </Section>

        <Section label="The workflow" accent="royal">
          <p>
            The build was a small, reliable pipeline rather than a clever model. Each stage removed a
            manual step, so the two-week clock was spent talking to the right people instead of
            sorting an inbox.
          </p>
          <WorkflowDiagram />
        </Section>

        <Section label="The result" accent="red">
          <p>
            Within 14 days the pipeline took the listing from launch to a signed renter and a
            delivered vehicle, at roughly{" "}
            <strong className="font-medium text-ink">$1,400 a month</strong> in recurring revenue on
            the weekly plan.
          </p>
          <p>
            The scoring step is what compressed the timeline. Instead of answering messages in the
            order they arrived, every conversation started with a ranked, pre-qualified applicant, so
            the first serious conversations were also the most likely to close. The same listing
            without the funnel would have meant days lost to back-and-forth with renters who were
            never a fit.
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
