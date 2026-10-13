"use client";

import { useEffect } from "react";
import ErrorState from "@/components/ui/ErrorState";

export default function SearchError({
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
        heading="Search failed"
        message={error.message}
        onRetry={reset}
      />
    </div>
  );
}
