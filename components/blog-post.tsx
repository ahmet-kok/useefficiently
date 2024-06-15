import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import {
  Cross1Icon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";

export function BlogPost({
  contentUrl,
  open,
  setOpen,
}: {
  contentUrl: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [postContent, setPostContent] = useState("");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      fetch(contentUrl)
        .then((response) => response.text())
        .then((data) => {
          const htmlContent: any = marked(data); // Convert markdown to HTML
          setPostContent(htmlContent);
        })
        .catch((error) => console.error("Error fetching post content:", error));
    }
  }, [open, contentUrl]);

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
    const images = tempDiv.querySelectorAll("img");

    images.forEach((img) => {
      img.classList.add("aspect-w-16", "aspect-h-9", "object-cover");
    });

    return { __html: tempDiv.innerHTML };
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="h-[95%] flex flex-col">
        <DrawerHeader className="flex justify-end">
          {/* <div>
            <DrawerTitle className="text-2xl font-bold">Blog Post Title</DrawerTitle>
            <DrawerDescription className="text-sm text-gray-600">
              A brief description or introduction to the blog post.
            </DrawerDescription>
          </div> */}
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="p-2"
              onClick={() => setOpen(false)}
            >
              <Cross1Icon />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto p-4 md:flex md:justify-center">
          <div className="w-full md:max-w-3xl" ref={contentRef}>
            {postContent ? (
              <div
                className="prose  mx-auto"
                dangerouslySetInnerHTML={renderContent(postContent)}
              />
            ) : (
              <p>No content available.</p>
            )}
          </div>
        </div>

        <DrawerFooter className="    items-center pt-2">
          <div className=" gap-2 flex">
            <Button variant="outline">
              <ArrowLeftIcon />
              Previous
            </Button>
            <Button variant="outline">
              Next
              <ArrowRightIcon />
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
