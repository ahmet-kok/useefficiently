"use client"
import { Block } from "@/components/block";
import Link from "next/link";

const Modal = () => {
  const handleOverlayClick = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      const modal = document.getElementById("modal");
      if (!modal) return;
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };

  return (
    <div
      id="modal"
      className="fixed inset-0 bg-black bg-opacity-50 justify-center items-center z-50 hidden"
      onClick={handleOverlayClick}
    >
      <Block className="w-11/12 md:w-2/3 lg:w-1/3">
        <h2 className="mb-4 text-3xl modal-title"></h2>
        <p className="mb-4 modal-description"></p>
        <div className="flex modal-link justify-end space-x-2">
          <Link
            target="_blank"
            className="border first-link border-zinc-700 bg-zinc-600 p-2 rounded-full px-3 cursor-pointer"
            href=""
          >
            Learn More
          </Link>

          <Link
            target="_blank"
            className="border border-violet-300 bg-violet-400 p-2 rounded-full px-3 cursor-pointer"
            href="https://cal.com/useefficiently/30min"
          >
            Contact us
          </Link>
        </div>
      </Block>
    </div>
  );
};

export default Modal;
