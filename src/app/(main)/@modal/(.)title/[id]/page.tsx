import Modal from "@/components/ui/Modal";
import TitleDetails from "@/components/title/TitleDetails";

export default async function InterceptedTitleModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Modal>
      <TitleDetails movieId={id} />
    </Modal>
  );
}
