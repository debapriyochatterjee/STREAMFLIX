import { redirect } from "next/navigation";
import { Bookmark } from "lucide-react";
import { auth } from "@/lib/auth";
import { getMyList } from "@/lib/users";
import { getMoviesByIds } from "@/lib/tmdb";
import ContentCard from "@/components/browse/ContentCard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "My List" };
export const dynamic = "force-dynamic";

export default async function MyListPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const ids = getMyList(session.user.id);
  const movies = ids.length > 0 ? await getMoviesByIds(ids) : [];

  return (
    <div className="px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <h1 className="mb-6 font-display text-3xl tracking-wide text-foreground">
        My List
      </h1>

      {movies.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-12 text-center">
          <Bookmark size={32} className="text-muted" aria-hidden="true" />
          <p className="max-w-sm text-muted">
            You haven&apos;t added any titles yet. Open a title and tap My List
            to save it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {movies.map((movie) => (
            <ContentCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
