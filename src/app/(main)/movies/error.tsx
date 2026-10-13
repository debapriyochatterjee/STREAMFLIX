"use client";

import { useEffect } from "react";
import ErrorState from "@/components/ui/ErrorState";

export default function MoviesError({
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
        heading="Something went wrong loading movies"
        message={error.message}
        onRetry={reset}
      />
    </div>
  );
}
