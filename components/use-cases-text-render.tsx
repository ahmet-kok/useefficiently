"use client";

import { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import information from "@/information.json";
import OrbitingCircle from "@/components/orbitingCircles";

export function UseCasesText({ slug }: { slug: string }) {
  const [postContent, setPostContent] = useState("");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch(`/contents/customer-stories/${slug}.md`)
      .then((response) => response.text())
      .then((data) => {
        const htmlContent: any = marked(data); // Convert markdown to HTML
        setPostContent(htmlContent);
      })
      .catch((error) => console.error("Error fetching post content:", error));
  }, [slug]);

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = contentRef.current.querySelectorAll("img");
    images.forEach((img) => {
      img.classList.add("opacity-0", "transition-opacity", "duration-500");
      observer.observe(img);
    });

    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, [postContent]);

  const renderContent = (html: any) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    // Add aspect ratio and object cover to images
    const images = tempDiv.querySelectorAll("img");
    images.forEach((img) => {
      img.classList.add("aspect-w-16", "aspect-h-9", "object-cover");
    });

    // Replace YouTube links with iframes
    const replaceYouTubeLinks = (link: HTMLAnchorElement) => {
      const href = link.getAttribute("href");
      let videoId = null;
      if (href === null) return;
      if (href.includes("youtube.com/watch?v=")) {
        videoId = new URL(href).searchParams.get("v");
      } else if (href.includes("youtu.be/")) {
        videoId = href.split("youtu.be/")[1];
      } else if (href.includes("youtube.com/embed/")) {
        videoId = href.split("youtube.com/embed/")[1];
      }

      if (videoId) {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );
        iframe.setAttribute("allowfullscreen", "true");
        iframe.classList.add("aspect-video", "w-full");
        link.replaceWith(iframe);
      }
    };

    const links: NodeListOf<HTMLAnchorElement> = tempDiv.querySelectorAll(
      "a[href^='https://www.youtube.com'], a[href^='https://youtu.be']"
    );
    links.forEach(replaceYouTubeLinks);

    return { __html: tempDiv.innerHTML };
  };

  return (
    <div
      className="w-full md:max-w-3xl mx-auto p-4 overflow-y-auto"
      ref={contentRef}
    >
      {postContent ? (
        <article
          className="prose dark:prose-invert prose-img:rounded-lg  prose-a:text-blue-600 mx-auto"
          dangerouslySetInnerHTML={renderContent(postContent)}
        />
      ) : (
        <p>No content available.</p>
      )}
    </div>
  );
}
