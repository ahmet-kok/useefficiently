"use client";
import { Block } from "@/components/block";
import Link from "next/link";
import information from "@/information.json";

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
      <Block className="max-w-4xl max-h-[90vh] overflow-scroll space-y-5 modal">
        <h2 className="text-3xl modal-title"></h2>
        <article className="prose lg:prose-xl  prose-zinc modal-description"></article>
        <div className="flex modal-link justify-end space-x-2">
          <Link
            target="_blank"
            className="border first-link border-zinc-700 bg-zinc-600 p-2 rounded-full px-3 cursor-pointer"
            href=""
          >
            Learn More
          </Link>

          <button
            data-cal-namespace=""
            data-cal-link={information.calendly}
            data-cal-config='{"layout":"month_view"}'
            className="border border-violet-300 bg-violet-400 p-2 rounded-full px-3 cursor-pointer"
          >
            Contact us
          </button>
        </div>
      </Block>
    </div>
  );
};

export default Modal;
