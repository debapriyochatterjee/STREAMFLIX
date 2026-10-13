"use client";

import { useEffect } from "react";

export default function BrowseError({
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
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-xl font-semibold text-foreground">
        Something went wrong loading titles
      </h2>
      <p className="max-w-md text-sm text-muted">{error.message}</p>
      <button
        onClick={reset}
        className="rounded bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        Try again
      </button>
    </div>
  );
}
