"use client";

import { useEffect } from "react";
import ErrorState from "@/components/ui/ErrorState";

export default function TVShowsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="pt-16">
      <ErrorState
        heading="Something went wrong loading TV shows"
        message={error.message}
        onRetry={reset}
      />
    </div>
  );
}
