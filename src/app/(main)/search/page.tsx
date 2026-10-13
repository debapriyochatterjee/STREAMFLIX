import { SearchX } from "lucide-react";
import ContentCard from "@/components/browse/ContentCard";
import { searchMovies } from "@/lib/tmdb";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q?.trim();
  return { title: query ? `Search: ${query}` : "Search" };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  if (!query) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-4 pt-16 text-center">
        <SearchX size={32} className="text-muted" aria-hidden="true" />
        <p className="text-muted">Search for movies by title.</p>
      </div>
    );
  }

  const results = await searchMovies(query);

  return (
    <div className="px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-lg text-foreground">
        {results.length > 0 ? `Results for "${query}"` : `No results found for "${query}"`}
      </h1>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {results.map((movie) => (
            <ContentCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-12 text-center">
          <SearchX size={32} className="text-muted" aria-hidden="true" />
          <p className="text-muted">Try a different title or check the spelling.</p>
        </div>
      )}
    </div>
  );
}
