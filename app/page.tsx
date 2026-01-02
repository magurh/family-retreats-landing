import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Baby,
  CalendarDays,
  Heart,
  Leaf,
  Sparkles,
  UtensilsCrossed
} from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

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

function SectionTitle({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-wide text-sage">{eyebrow}</p>
      <h2 className="mt-3 font-[var(--font-serif)] text-3xl leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted prose-width">{subtitle}</p>
      )}
    </div>
  );
}

function Card({
  title,
  text,
  icon
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl2 border border-ink/10 bg-sand/55 p-6 shadow-softer">
      <div className="flex items-start gap-3">
        <div className="mt-1 rounded-xl bg-honey/20 p-2 text-ink">{icon}</div>
        <div>
          <h3 className="font-[var(--font-serif)] text-xl text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="pb-20">
      {/* Top nav */}
      <header className="pt-8">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="group inline-flex items-baseline gap-3">
              <span className="font-[var(--font-serif)] text-2xl text-ink">
                Golden Retreats
              </span>
              <span className="hidden text-sm text-muted sm:inline">
                Time together. Memories forever.
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="#retreats"
                className="hidden rounded-full border border-ink/10 bg-sand/60 px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:bg-sand sm:inline-flex"
              >
                View upcoming retreats
              </Link>
              <Link
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-sand shadow-soft transition hover:translate-y-[-1px]"
              >
                Join waitlist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <main className="mt-10">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>
                  <Leaf className="h-4 w-4 text-sage" />
                  Slow nature days
                </Pill>
                <Pill>
                  <Heart className="h-4 w-4 text-terracotta" />
                  Designed by parents
                </Pill>
                <Pill>
                  <Sparkles className="h-4 w-4 text-blue" />
                  Gentle + human
                </Pill>
              </div>

              <h1 className="mt-6 font-[var(--font-serif)] text-4xl leading-tight text-ink sm:text-5xl">
                Unhurried family retreats designed for rest, connection, and joy.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-muted prose-width">
                A holiday where you don’t have to “hold it all.” Shared meals, simple
                rhythms, kids’ activities with care, and space for the grown-ups to
                exhale.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#retreats"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-terracotta px-5 py-3 text-base font-semibold text-sand shadow-soft transition hover:translate-y-[-1px]"
                >
                  View upcoming retreats <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#experience"
                  className="inline-flex items-center justify-center rounded-xl border border-ink/10 bg-sand/60 px-5 py-3 text-base font-semibold text-ink shadow-sm transition hover:bg-sand"
                >
                  See the rhythm
                </Link>
              </div>

              <p className="mt-6 text-sm text-muted">
                Not a “hustle holiday.” Just calm days you’ll actually remember.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-sage/10 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-sand/40 shadow-soft">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/hero.jpg"
                    alt="A calm, real family moment in warm morning light"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <p className="font-[var(--font-serif)] text-lg text-ink">
                    “The kind of place where barefoot is the dress code.”
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Warm light. Long tables. Nature nearby. No rush.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Gentle divider */}
        <div className="mt-14">
          <Container>
            <div className="h-px w-full bg-ink/10" />
          </Container>
        </div>

        {/* Problem */}
        <section className="mt-16" id="problem">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <SectionTitle
                eyebrow="Why this exists"
                title="Holidays that don’t feel like rest"
                subtitle="So many family trips become logistics: packing, feeding, negotiating naps, keeping everyone happy — while parents quietly run on fumes."
              />

              <div className="grid gap-4">
                <Card
                  title="Parents doing all the work"
                  text="Cooking, cleaning, planning, carrying — even in beautiful places."
                  icon={<UtensilsCrossed className="h-5 w-5" />}
                />
                <Card
                  title="No space to truly connect"
                  text="We’re together… but tired, distracted, and rushing to the next thing."
                  icon={<Heart className="h-5 w-5" />}
                />
                <Card
                  title="Rest becomes a myth"
                  text="Coming home needing another holiday is the norm — not the exception."
                  icon={<CalendarDays className="h-5 w-5" />}
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Promise */}
        <section className="mt-20" id="promise">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-[2rem] border border-ink/10 bg-sand/55 p-8 shadow-softer">
                  <ul className="space-y-5 text-muted">
                    <li className="flex gap-3">
                      <span className="mt-0.5 rounded-xl bg-sage/15 p-2 text-sage">
                        <UtensilsCrossed className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-ink">Shared meals</p>
                        <p className="mt-1 text-sm leading-relaxed">
                          Simple, nourishing food around a long table. No pressure.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 rounded-xl bg-blue/15 p-2 text-blue">
                        <Baby className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-ink">
                          Gentle childcare / kids’ activities
                        </p>
                        <p className="mt-1 text-sm leading-relaxed">
                          Thoughtful play so parents can breathe — without guilt.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 rounded-xl bg-honey/20 p-2 text-ink">
                        <Leaf className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-ink">Time for parents</p>
                        <p className="mt-1 text-sm leading-relaxed">
                          Read, nap, walk, talk — or do nothing at all.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 rounded-xl bg-terracotta/15 p-2 text-terracotta">
                        <Sparkles className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-ink">Nature + slowness</p>
                        <p className="mt-1 text-sm leading-relaxed">
                          Morning light, barefoot kids, simple rhythms that feel like
                          home.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <SectionTitle
                  eyebrow="Our promise"
                  title="A retreat that holds the structure—so you can hold each other"
                  subtitle="We design the container: meals, gentle activities, shared spaces, and quiet corners. You bring your people."
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Experience */}
        <section className="mt-20" id="experience">
          <Container>
            <SectionTitle
              eyebrow="The experience"
              title="A simple rhythm that feels good"
              subtitle="Not a packed itinerary. Just enough structure to make space for the good stuff."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <div className="rounded-xl2 border border-ink/10 bg-sand/55 p-6 shadow-softer">
                <p className="text-sm font-semibold text-sage">Morning rhythms</p>
                <h3 className="mt-2 font-[var(--font-serif)] text-xl text-ink">
                  Slow starts
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Breakfast together, gentle play, coffee while someone else helps
                  with the little ones.
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-ink/10">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/nature-1.jpg"
                      alt="Hands in grass, morning light"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl2 border border-ink/10 bg-sand/55 p-6 shadow-softer">
                <p className="text-sm font-semibold text-blue">Afternoons free</p>
                <h3 className="mt-2 font-[var(--font-serif)] text-xl text-ink">
                  Do less
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Walks, naps, garden time, a book you actually finish — with
                  permission to keep it simple.
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-ink/10">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/nature-2.jpg"
                      alt="A long table, warm light"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl2 border border-ink/10 bg-sand/55 p-6 shadow-softer">
                <p className="text-sm font-semibold text-terracotta">Evenings together</p>
                <h3 className="mt-2 font-[var(--font-serif)] text-xl text-ink">
                  The good part
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Shared dinner, soft conversation, kids drifting off — and grown-ups
                  feeling human again.
                </p>

                <div className="mt-6 rounded-xl bg-terracotta/10 p-4">
                  <p className="text-sm text-ink">
                    <span className="font-semibold">Our rule:</span> nothing too staged.
                    Nothing overly “perfect.” Just real life — lighter.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Retreats */}
        <section className="mt-20" id="retreats">
          <Container>
            <SectionTitle
              eyebrow="Upcoming"
              title="Upcoming retreats (soft launch)"
              subtitle="We’re starting small — a few carefully chosen dates and places. If you’d like first access, join the waitlist."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  season: "Spring",
                  title: "Countryside Villa",
                  meta: "4 nights · gentle schedule · shared meals",
                  tag: "Limited spots"
                },
                {
                  season: "Summer",
                  title: "Garden + Pool Week",
                  meta: "5 nights · kids’ activities · slow evenings",
                  tag: "Family-first"
                },
                {
                  season: "Autumn",
                  title: "Long-Table Retreat",
                  meta: "3 nights · nature walks · cozy dinners",
                  tag: "Cozy & calm"
                }
              ].map((r) => (
                <div
                  key={r.title}
                  className="rounded-xl2 border border-ink/10 bg-sand/55 p-6 shadow-softer"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-sage">{r.season}</p>
                    <span className="rounded-full bg-honey/25 px-3 py-1 text-xs font-semibold text-ink">
                      {r.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-[var(--font-serif)] text-xl text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{r.meta}</p>
                  <div className="mt-5">
                    <Link
                      href="#waitlist"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:underline"
                    >
                      Get notified <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Social proof */}
        <section className="mt-20" id="proof">
          <Container>
            <SectionTitle
              eyebrow="Social proof"
              title="Early words (and a simple promise)"
              subtitle="If you’re early: thank you. This is being built slowly, on purpose."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <div className="rounded-xl2 border border-ink/10 bg-sand/55 p-6 shadow-softer">
                <p className="font-[var(--font-serif)] text-lg text-ink">
                  “For the first time, I drank my coffee while it was still warm.”
                </p>
                <p className="mt-3 text-sm text-muted">— Parent from a trial weekend</p>
              </div>
              <div className="rounded-xl2 border border-ink/10 bg-sand/55 p-6 shadow-softer">
                <p className="font-[var(--font-serif)] text-lg text-ink">
                  “It felt like someone else was holding the shape of the day.”
                </p>
                <p className="mt-3 text-sm text-muted">— Parent from a trial weekend</p>
              </div>
              <div className="rounded-xl2 border border-ink/10 bg-sand/55 p-6 shadow-softer">
                <p className="font-[var(--font-serif)] text-lg text-ink">
                  Designed by parents, for parents.
                </p>
                <p className="mt-3 text-sm text-muted">
                  With a gentle, human pace — not a “productized” experience.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="mt-20" id="waitlist">
          <Container>
            <div className="rounded-[2rem] border border-ink/10 bg-sand/60 p-8 shadow-soft sm:p-12">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-semibold tracking-wide text-sage">
                    Join the waitlist
                  </p>
                  <h2 className="mt-3 font-[var(--font-serif)] text-3xl leading-tight text-ink sm:text-4xl">
                    First access to dates, places, and the gentle details.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted prose-width">
                    We’ll email you when upcoming retreats open — and that’s it. No
                    urgency, no pressure.
                  </p>
                </div>

                <div className="flex justify-start lg:justify-end">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Footer */}
        <footer className="mt-20">
          <Container>
            <div className="flex flex-col items-start justify-between gap-6 border-t border-ink/10 py-10 sm:flex-row sm:items-center">
              <div>
                <p className="font-[var(--font-serif)] text-lg text-ink">Golden Retreats</p>
                <p className="mt-1 text-sm text-muted">
                  Time together. Memories forever.
                </p>
              </div>
              <div className="flex gap-4 text-sm">
                <Link href="#problem" className="text-muted hover:text-ink">
                  Why
                </Link>
                <Link href="#experience" className="text-muted hover:text-ink">
                  Rhythm
                </Link>
                <Link href="#retreats" className="text-muted hover:text-ink">
                  Upcoming
                </Link>
                <Link href="#waitlist" className="text-muted hover:text-ink">
                  Waitlist
                </Link>
              </div>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
