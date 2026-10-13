import MovieBrowse from "@/components/browse/MovieBrowse";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Browse" };
export const dynamic = "force-dynamic";

export default function BrowsePage() {
  return <MovieBrowse />;
}
