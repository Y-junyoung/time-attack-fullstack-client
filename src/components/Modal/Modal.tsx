import { useModal } from "@/contexts/modal.context";

function Modal({ children }: { children: React.ReactNode }) {
  const modal = useModal();
  const handleClickBackDrop = () => modal.close();

  return (
    <div
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20"
      onClick={handleClickBackDrop}
    >
      <div
        className="bg-white rounded-md w-full max-w-[600px] px-5 pt-8 pb-20"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
