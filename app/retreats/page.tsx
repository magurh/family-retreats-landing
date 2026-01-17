import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-sand/50 px-3 py-1 text-sm text-muted shadow-sm">
      {children}
    </span>
  );
}

function RetreatCard({
  title,
  location,
  dates,
  meta,
  imageSrc,
  tag
}: {
  title: string;
  location: string;
  dates: string;
  meta: string[];
  imageSrc: string;
  tag: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-sand/55 shadow-soft">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-[var(--font-serif)] text-2xl text-ink">{title}</h3>
          <span className="rounded-full bg-honey/25 px-3 py-1 text-xs font-semibold text-ink">
            {tag}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Pill>
            <MapPin className="h-4 w-4 text-sage" />
            {location}
          </Pill>
          <Pill>
            <CalendarDays className="h-4 w-4 text-terracotta" />
            {dates}
          </Pill>
          <Pill>
            <Users className="h-4 w-4 text-blue" />
            Small group
          </Pill>
        </div>

        <ul className="mt-6 space-y-3 text-sm text-muted">
          {meta.map((m) => (
            <li key={m} className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-sage/70" />
              <span className="leading-relaxed">{m}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href="/#waitlist"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-terracotta px-5 py-3 text-sm font-semibold text-sand shadow-soft transition hover:translate-y-[-1px]"
          >
            Join the waitlist <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/#help"
            className="text-sm font-semibold text-ink/85 hover:text-ink hover:underline"
          >
            Back to how we help
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="relative pb-20 overflow-hidden">
      <header className="pt-8">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="group inline-flex items-baseline gap-3">
              <span className="font-[var(--font-serif)] text-2xl text-ink">
                Let&apos;s Gather Retreats
              </span>
              <span className="hidden text-sm text-muted sm:inline">
                Time together. Memories forever.
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-sand shadow-soft transition hover:translate-y-[-1px]"
              >
                Join waitlist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </header>

      <main className="mt-10">
        <Container>
          <div className="max-w-2xl">
            <h1 className="mt-3 font-[var(--font-serif)] text-4xl leading-tight text-ink sm:text-5xl">
              Upcoming Retreats
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted prose-width">
              We're starting small, with a gentle pace and lots of care.
              Join the waitlist to get first access when dates go live.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            <RetreatCard
              title="Countryside Long-Table Retreat"
              location="UK Countryside"
              dates="3 nights · Spring"
              tag="Soft launch"
              imageSrc="/hero.jpg"
              meta={[
                "Family-friendly villa + calm shared spaces",
                "Catered dinners + simple breakfasts",
                "Gentle kids’ activities (optional)",
                "Afternoons free for naps, walks, and slow time"
              ]}
            />

            <RetreatCard
              title="Garden & Pool Week"
              location="Warm-weather escape"
              dates="5 nights · Summer"
              tag="Family-first"
              imageSrc="/nature-1.jpg"
              meta={[
                "Pool + shaded garden for easy days",
                "Shared meals + flexible food options",
                "Light wellbeing (stretching, breathwork)",
                "Evenings together, no packed itinerary"
              ]}
            />

            <RetreatCard
              title="Autumn Cozy Gathering"
              location="Nature + cozy interiors"
              dates="4 nights · Autumn"
              tag="Cozy & calm"
              imageSrc="/nature-2.jpg"
              meta={[
                "Walks, warm food, and slow mornings",
                "Optional activities (nature, crafts, wellbeing)",
                "Planned flow so no one carries the mental load",
                "Space to rest—without needing to plan"
              ]}
            />
          </div>

          <div className="mt-14">
            <div className="h-px w-full bg-ink/10" />
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-[var(--font-serif)] text-lg text-ink">
                Want first access?
              </p>
              <p className="mt-1 text-sm text-muted">
                Join the waitlist and we’ll email you when dates open.
              </p>
            </div>

            <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-ink/10 bg-sand/60 px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-sand"
                >
                Back Home
            </Link>

          </div>
        </Container>
      </main>
    </div>
  );
}
