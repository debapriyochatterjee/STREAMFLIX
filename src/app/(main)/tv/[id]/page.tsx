import TVDetails from "@/components/title/TVDetails";
import { getTVShowDetails } from "@/lib/tmdb";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const show = await getTVShowDetails(id);
    return {
      title: show.name,
      description: show.overview || `Watch ${show.name} on StreamFlix.`,
    };
  } catch {
    return { title: "TV Show" };
  }
}

export default async function TVShowPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="pt-16">
      <TVDetails tvId={id} />
    </div>
  );
}
