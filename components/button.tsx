"use client";
import { cn } from "@/lib/utils";
const Button = ({
  title,
  description,
  link,
  children,
  className,
  key,
}: {
  title: string;
  description: string;
  link: string;
  children: any;
  className: string;
  key: string;
}) => {
  const openModalWithMessage = ({
    title,
    description,
    link,
  }: {
    title: string;
    description: string;
    link: string;
  }) => {
    const modal = document.getElementById("modal");
    if (!modal) return;
    const modalTitle = modal.querySelector(".modal-title");
    const modalDescription = modal.querySelector(".modal-description");
    const modalLink = modal.querySelector(".modal-link");
    if (!modalLink) return;

    const firstLink = modalLink.querySelector(
      ".first-link"
    ) as HTMLAnchorElement;
    console.log(firstLink);
    if (!modalTitle || !modalDescription || !modalLink || !firstLink) return;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    if (link.length > 0) {
      firstLink.classList.remove("hidden");
      firstLink.href = link;
    } else firstLink.classList.add("hidden");
    modal.classList.add("flex");
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.replace("opacity-0", "opacity-100");
    }, 0.1);
  };

  return (
    <button
      onClick={() =>
        openModalWithMessage({
          title: title,
          description: description,
          link: link,
        })
      }
      key={key}
      className={cn("text-start", className)}
    >
      {children}
    </button>
  );
};

const ButtonBlock = ({
  title,
  description,
  link,
  children,
  className,
  key,
}: {
  title: string;
  description: string;
  link: string;
  children: any;
  className: string;
  key: string;
}) => {
  const openModalWithMessage = ({
    title,
    description,
    link,
  }: {
    title: string;
    description: string;
    link: string;
  }) => {
    const modal = document.getElementById("modal");
    if (!modal) return;
    const subModal = modal.querySelector(".submodal");
    const modalLink = modal.querySelector(".modal-link");
    if (!subModal || !modalLink) return;
    const firstLink = modalLink.querySelector(
      ".first-link"
    ) as HTMLAnchorElement;
    if (!firstLink) return;
    const modalTitle = subModal.querySelector(
      ".modal-title"
    ) as HTMLHeadingElement;
    const modalDescription = modal.querySelector(".modal-description");
    if (!modalTitle || !modalDescription || !modalLink || !firstLink) return;
    modalTitle.textContent = title;
    if (title === "") {
      modalTitle.classList.add("hidden");
    } else {
      modalTitle.classList.remove("hidden");
    }
    modalDescription.innerHTML = description;

    if (link.length > 0) {
      firstLink.classList.remove("hidden");
      firstLink.href = link;
    } else firstLink.classList.add("hidden");
    modal.classList.add("flex");
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.replace("opacity-0", "opacity-100");
    }, 0.1);
    document.body.style.overflow = "hidden";
  };

  return (
    <button
      onClick={() =>
        openModalWithMessage({
          title: title,
          description: description,
          link: link,
        })
      }
      key={key}
      className={cn(
        "rounded-xl border border-zinc-700 bg-zinc-800 p-6 text-start cursor-pointer duration-300 transition-all hover:scale-105",
        className
      )}
    >
      {children}
    </button>
  );
};

export { Button, ButtonBlock };
