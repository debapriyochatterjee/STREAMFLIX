import Hero from "@/components/browse/Hero";
import ContentRow from "@/components/browse/ContentRow";
import {
  TV_GENRES,
  getPopularTV,
  getTVByGenre,
  getTopRatedTV,
  getTrendingTV,
} from "@/lib/tmdb";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "TV Shows" };
export const dynamic = "force-dynamic";

export default async function TVShowsPage() {
  const [trending, popular, topRated, genreRows] = await Promise.all([
    getTrendingTV(),
    getPopularTV(),
    getTopRatedTV(),
    Promise.all(TV_GENRES.map((genre) => getTVByGenre(genre.id))),
  ]);

  const featured = trending[0];

  return (
    <div>
      {featured && <Hero movie={featured} mediaType="tv" />}

      <div className="space-y-2 pb-16 pt-4">
        <ContentRow title="Trending Now" movies={trending} mediaType="tv" />
        <ContentRow title="Popular TV Shows" movies={popular} mediaType="tv" />
        <ContentRow title="Top Rated" movies={topRated} mediaType="tv" />
        {TV_GENRES.map((genre, index) => (
          <ContentRow
            key={genre.id}
            title={genre.name}
            movies={genreRows[index]}
            mediaType="tv"
          />
        ))}
      </div>
    </div>
  );
}
