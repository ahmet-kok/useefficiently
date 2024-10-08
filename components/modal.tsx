"use client";
import { Block } from "@/components/block";
import Link from "next/link";
import information from "@/information.json";
import React from "react";

const Modal = () => {
  const handleOverlayClick = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.TouchEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      const modal = document.getElementById("modal");
      if (!modal) return;

      modal.classList.replace("opacity-100", "opacity-0");
      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }, 300);
      document.body.style.overflow = "unset";
      const subModal = modal.querySelector(".modal");
      if (!subModal) return;
      subModal.scrollTop = 0;
    }
    3;
  };

  return (
    <div
      id="modal"
      className="fixed inset-0 bg-black bg-opacity-50 justify-center items-center z-50 hidden duration-300 opacity-0 transition-all"
      onClick={handleOverlayClick}
    >
      <Block className="max-w-4xl max-h-[90vh] overflow-y-auto space-y-5 modal relative mx-2 overflow-x-hidden">
        <div className="flex justify-between submodal flex-nowrap">
          <h2 className="text-3xl sm:text-5xl font-extrabold modal-title"></h2>
          <button
            onClick={handleOverlayClick}
            className="h-min w-min justify-self-end text-3xl border border-violet-300 bg-violet-400 p-0 pb-0 rounded-full px-2 cursor-pointer items-center justify-center text-center text-violet-50"
          >
            &times;
          </button>
        </div>
        <article className="prose-lg lg:prose-xl prose-zinc modal-description"></article>

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
