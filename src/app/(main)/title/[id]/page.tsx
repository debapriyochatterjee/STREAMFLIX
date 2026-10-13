import TitleDetails from "@/components/title/TitleDetails";
import { getImageUrl, getMovieDetails } from "@/lib/tmdb";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const movie = await getMovieDetails(id);
    const backdropUrl = getImageUrl(movie.backdrop_path, "w1280");

    return {
      title: movie.title,
      description: movie.overview || `Watch ${movie.title} on StreamFlix.`,
      openGraph: {
        title: movie.title,
        description: movie.overview,
        images: backdropUrl ? [{ url: backdropUrl }] : [],
      },
    };
  } catch {
    return { title: "Title" };
  }
}

export default async function TitlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="pt-16">
      <TitleDetails movieId={id} />
    </div>
  );
}
