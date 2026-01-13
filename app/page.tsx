import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
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
import FloatingLeaves from "@/components/FloatingLeaves";

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function Pill({ children }: { children: ReactNode }) {
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
        <p className="mt-4 text-base leading-relaxed text-muted prose-width">
          {subtitle}
        </p>
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
  icon: ReactNode;
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

function HelpCard({
  eyebrow,
  title,
  description,
  bullets,
  ctaText,
  ctaHref,
  icon
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-ink/10 bg-sand/55 p-8 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-honey/20 p-3 text-ink">{icon}</div>
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-wide text-sage">{eyebrow}</p>
          <h3 className="mt-2 font-[var(--font-serif)] text-2xl leading-tight text-ink">
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted prose-width">
            {description}
          </p>

          <div className="mt-6 space-y-3">
            {bullets.map((b) => (
              <div key={b} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-sage/70" />
                <p className="text-sm leading-relaxed text-muted">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:underline"
            >
              {ctaText} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="relative pb-20 overflow-hidden">
      <FloatingLeaves />

      <div className="relative z-10">
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
                  href="#help"
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
                    href="#help"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-terracotta px-5 py-3 text-base font-semibold text-sand shadow-soft transition hover:translate-y-[-1px]"
                  >
                    View upcoming retreats <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex items-center justify-center rounded-xl border border-ink/10 bg-sand/60 px-5 py-3 text-base font-semibold text-ink shadow-sm transition hover:bg-sand"
                  >
                    About us
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

          {/* Divider */}
          <div className="mt-14">
            <Container>
              <div className="h-px w-full bg-ink/10" />
            </Container>
          </div>

          {/* 1) Why this exists */}
          <section className="mt-16" id="problem">
            <Container>
              <SectionTitle
                eyebrow="Why this exists"
                title="Family time shouldn’t feel like work."
              />

              <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
                <div className="space-y-5 text-base leading-relaxed text-muted prose-width">
                  <p>
                    Too often, holidays and reunions turn into a long list of things to
                    organise — accommodation, meals, food shopping, schedules,
                    activities. While everyone is meant to be relaxing, one or two
                    people end up managing everything.
                  </p>
                  <p className="text-ink/90">We exist to take that weight away.</p>
                  <p>
                    We design and support family holidays where everything is
                    thoughtfully taken care of, so you can focus on what you came for:
                    time together.
                  </p>
                </div>

                <div className="grid gap-4">
                  <Card
                    title="Less organising"
                    text="We think through the moving parts—so you don’t have to."
                    icon={<CalendarDays className="h-5 w-5" />}
                  />
                  <Card
                    title="More presence"
                    text="Space to connect without rushing from task to task."
                    icon={<Heart className="h-5 w-5" />}
                  />
                  <Card
                    title="A calmer pace"
                    text="Simple rhythms that feel gentle for kids and adults."
                    icon={<Leaf className="h-5 w-5" />}
                  />
                </div>
              </div>
            </Container>
          </section>

          {/* 2) What we do */}
          <section className="mt-20" id="promise">
            <Container>
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="order-2 lg:order-1">
                  <div className="rounded-[2rem] border border-ink/10 bg-sand/55 p-8 shadow-softer">
                    <p className="text-base leading-relaxed text-muted prose-width">
                      Whether we’re hosting you on one of our fully inclusive family
                      retreats or supporting you behind the scenes with planning and
                      coordination, our role is the same:
                    </p>

                    <div className="mt-6 space-y-4">
                      {[
                        "We help you find the right place to stay",
                        "We organise catering and food options",
                        "We plan gentle, optional activities",
                        "We think through the details so you don’t have to"
                      ].map((line) => (
                        <div key={line} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-sage/70" />
                          <p className="text-sm leading-relaxed text-muted">{line}</p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 text-sm leading-relaxed text-muted prose-width">
                      From start to finish, we remove the stress of organising —
                      without the crowds or impersonal feel of big all-inclusive
                      resorts.
                    </p>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <SectionTitle
                    eyebrow="What we do"
                    title="Thoughtful planning, gentle structure, real rest."
                    subtitle="We take care of the practical details so your family can focus on being together."
                  />
                </div>
              </div>
            </Container>
          </section>

          {/* 3) How we can help (2 boxes) */}
          <section className="mt-20" id="help">
            <Container>
              <SectionTitle
                eyebrow="How we can help"
                title="Two ways to work with us"
                subtitle="Choose a fully hosted retreat, or let us support your family holiday behind the scenes."
              />

              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <HelpCard
                  eyebrow="All-inclusive family retreats"
                  title="Arrive, settle in, exhale."
                  description="Small, carefully curated retreats hosted by us, where everything is included and taken care of."
                  bullets={[
                    "Family-friendly accommodation",
                    "Catering and shared meals",
                    "Light, optional wellbeing activities",
                    "The overall flow of the experience",
                    "You simply arrive and settle in — knowing the details have already been handled."
                  ]}
                  ctaText="View upcoming retreats"
                  ctaHref="#waitlist"
                  icon={<Sparkles className="h-6 w-6" />}
                />

                <HelpCard
                  eyebrow="Family reunion planning & holiday support"
                  title="Keep the time together. We handle the planning."
                  description="For families who want to gather together but don’t want the stress of organising it."
                  bullets={[
                    "Sourcing and booking suitable accommodation",
                    "Organising catering or food options",
                    "Planning activities and logistics",
                    "Helping the holiday run smoothly — without us travelling with you",
                    "You keep the time together. We take care of the planning."
                  ]}
                  ctaText="Enquire about planning support"
                  ctaHref="#waitlist"
                  icon={<UtensilsCrossed className="h-6 w-6" />}
                />
              </div>
            </Container>
          </section>

          {/* 5) About us */}
          <section className="mt-20" id="about">
            <Container>
              <SectionTitle
                eyebrow="About us"
                title="Designed by parents, for families"
              />

              <div className="mt-6 grid gap-10 lg:grid-cols-2">
                <div className="space-y-5 text-base leading-relaxed text-muted prose-width">
                  <p>
                    We’re parents to young children — and this business was born from
                    lived experience.
                  </p>
                  <p>
                    Our families are spread across the world, and holidays became the
                    way we stayed connected, built memories, and spent meaningful time
                    together. Over the years, we saw how powerful those shared moments
                    were — but also how much work they took to organise.
                  </p>
                  <p className="text-ink/90">Then we had a baby.</p>
                  <p>
                    Suddenly, travel felt more complicated. Rest felt harder to come
                    by. And the idea of going away — even somewhere beautiful — came
                    with questions, logistics, and exhaustion.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-ink/10 bg-sand/55 p-8 shadow-softer">
                  <div className="space-y-5 text-base leading-relaxed text-muted prose-width">
                    <p>
                      What we wanted was simple: a calm place to stay, great food,
                      thoughtful service, time to walk, move, rest, and reconnect —
                      without overspending or managing everything ourselves.
                    </p>
                    <p className="text-ink/90">When we couldn’t find it, we decided to create it.</p>
                    <p>
                      Everything we offer is shaped by that experience — designed by
                      parents, for families, with care, practicality, and real life in
                      mind.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    <Pill>
                      <Heart className="h-4 w-4 text-terracotta" />
                      Care + practicality
                    </Pill>
                    <Pill>
                      <Leaf className="h-4 w-4 text-sage" />
                      Calm, nature-first
                    </Pill>
                    <Pill>
                      <Baby className="h-4 w-4 text-blue" />
                      Family-friendly by default
                    </Pill>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* 6) What families say */}
          <section className="mt-20" id="say">
            <Container>
              <SectionTitle
                eyebrow="What families say"
                title="What families say"
                subtitle="A few early words from trial stays—and the feeling we’re building toward."
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
                    “Designed by parents, for parents.”
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Gentle structure, real rest, and time together that feels easy.
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
                      First access to retreats—and a simple way to enquire.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted prose-width">
                      We’ll email you when dates open. If you’re interested in reunion
                      planning support, join the waitlist and reply to our first email
                      with a few details.
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
                  <Link href="#help" className="text-muted hover:text-ink">
                    How we help
                  </Link>
                  <Link href="#about" className="text-muted hover:text-ink">
                    About
                  </Link>
                  <Link href="#say" className="text-muted hover:text-ink">
                    Families say
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
    </div>
  );
}
