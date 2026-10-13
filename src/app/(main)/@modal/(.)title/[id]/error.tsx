"use client";

import { useEffect } from "react";
import Modal from "@/components/ui/Modal";
import ErrorState from "@/components/ui/ErrorState";

export default function ModalTitleError({
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
    <Modal>
      <ErrorState message={error.message} onRetry={reset} heading="Couldn't load this title" />
    </Modal>
  );
}
