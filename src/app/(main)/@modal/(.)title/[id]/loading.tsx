import Modal from "@/components/ui/Modal";
import TitleDetailsSkeleton from "@/components/title/TitleDetailsSkeleton";

export default function ModalTitleLoading() {
  return (
    <Modal>
      <TitleDetailsSkeleton />
    </Modal>
  );
}
