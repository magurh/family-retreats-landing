"use client";

import { useMemo, useState } from "react";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const ok = useMemo(() => isValidEmail(email), [email]);

  return (
    <div className="w-full max-w-xl">
      <form
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
        onSubmit={(e) => {
          e.preventDefault();
          if (!ok) return;
          setSubmitted(true);

          // No-pressure, no backend: keep it local for now.
          // Replace with your preferred waitlist provider later.
          try {
            const key = "golden_waitlist_emails";
            const prev = JSON.parse(localStorage.getItem(key) ?? "[]") as string[];
            const next = Array.from(new Set([...prev, email.trim().toLowerCase()]));
            localStorage.setItem(key, JSON.stringify(next));
          } catch {
            // ignore
          }
        }}
      >
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          value={email}
          onChange={(e) => {
            setSubmitted(false);
            setEmail(e.target.value);
          }}
          placeholder="Your email"
          className="w-full rounded-xl border border-ink/10 bg-sand/60 px-4 py-3 text-base text-ink shadow-sm outline-none placeholder:text-muted/70 focus:border-terracotta/50 focus:ring-4 focus:ring-honey/20"
        />
        <button
          type="submit"
          disabled={!ok}
          className="rounded-xl bg-terracotta px-5 py-3 text-base font-semibold text-sand shadow-soft transition hover:translate-y-[-1px] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
        >
          Join the waitlist
        </button>
      </form>

      <p className="mt-3 text-sm text-muted">
        Low pressure. No spam. Just a note when dates open.
      </p>

      {submitted && (
        <div className="mt-4 rounded-xl border border-sage/20 bg-sage/10 px-4 py-3 text-sm text-ink">
          You’re on the list. We’ll reach out gently when something’s ready.
        </div>
      )}
    </div>
  );
}
