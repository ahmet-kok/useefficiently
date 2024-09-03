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
  };

  const closeModal = () => {
    const modal = document.getElementById("modal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
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
    /*     modalDescription.textContent = description;
     */ // add modal description p tags by splitting with the \n character, also find the ## and make that line h2 tags.
    // add a class to the h2 tags to make them bold and larger
    // add a class to the p tags to make them smaller

    /* modalDescription.innerHTML = description
      .split("\n")
      .map((item, key) => {
        if (item.startsWith("###")) {
          return `<h3 class="text-xl font-bold">${item.replace("#", "")}</h3>`;
        } else if (item.startsWith("##")) {
          return `<h2 class="text-2xl font-bold">${item.replace(
            "##",
            ""
          )}</h2>`;
        }
        if (item.includes("**")) {
          return item.replace("**", "<strong>").replace("**", "</strong>");
        }
        

        return `<p class="mt-2">${item}</p>`;
      })
      .join(""); */

    modalDescription.innerHTML = description;
    if (link.length > 0) {
      firstLink.classList.remove("hidden");
      firstLink.href = link;
    } else firstLink.classList.add("hidden");
    modal.classList.add("flex");
    modal.classList.remove("hidden");
  };

  const closeModal = () => {
    const modal = document.getElementById("modal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
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
