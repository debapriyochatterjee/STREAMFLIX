import { getPosterCollageMovies } from "@/lib/tmdb";
import PosterCollage from "@/components/marketing/PosterCollage";
import type { Movie } from "@/types";

export const dynamic = "force-dynamic";

export default async function LandingPage() {
  let movies: Movie[] = [];
  try {
    movies = await getPosterCollageMovies();
  } catch {
    // Graceful fallback: render the hero without the collage rather than
    // crashing the landing page if TMDB is unreachable or misconfigured.
    movies = [];
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      <PosterCollage movies={movies} />

      {/* Layered dark overlay: keeps posters visible while guaranteeing
          text contrast, darkest around the centered hero copy. */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/25 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.75)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-32 text-center sm:px-6">
        <h1 className="font-display text-5xl leading-tight tracking-wide text-foreground sm:text-7xl">
          Unlimited movies,
          <br />
          TV shows and more
        </h1>
        <p className="mt-5 text-lg text-foreground/80 sm:text-xl">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="mt-2 text-muted">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            className="w-full rounded border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
}
