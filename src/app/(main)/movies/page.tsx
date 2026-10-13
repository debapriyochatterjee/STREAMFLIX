import MovieBrowse from "@/components/browse/MovieBrowse";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Movies" };
export const dynamic = "force-dynamic";

export default function MoviesPage() {
  return <MovieBrowse />;
}
