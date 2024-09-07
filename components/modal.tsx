"use client";
import { Block } from "@/components/block";
import Link from "next/link";
import information from "@/information.json";
import { RiCloseCircleFill, RiCloseCircleLine } from "react-icons/ri";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

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
      <Block className="max-w-4xl max-h-[90vh] overflow-scroll space-y-5 modal relative">
        <div className="flex justify-between submodal">
          <div className="article space-y-5">
            <h2 className="text-3xl modal-title"></h2>
            <article className="prose lg:prose-xl  prose-zinc modal-description bg-zinc-800"></article>
          </div>

          <button
            onClick={handleOverlayClick}
            className="h-min w-min justify-self-end text-4xl border border-violet-300 bg-violet-400 p-0 pb-1 rounded-full px-3 cursor-pointer items-center justify-center text-center text-violet-50"
          >
            &times;
          </button>
        </div>
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
