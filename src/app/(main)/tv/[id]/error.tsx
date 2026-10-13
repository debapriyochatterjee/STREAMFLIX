"use client";

import { useEffect } from "react";
import ErrorState from "@/components/ui/ErrorState";

export default function TVShowError({
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
      <ErrorState message={error.message} onRetry={reset} heading="Couldn't load this show" />
    </div>
  );
}
