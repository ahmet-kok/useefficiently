import { cn } from "@/lib/utils";

export default function Section({
  title,
  description,
  children,
  center = false,
  className,
  id,
  h1,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  center?: boolean;
  className?: string;
  id?: string;
  h1?: boolean;
}) {
  return (
    <>
      {center && (
        <div className={"min-h-[75vh] flex items-center"} id={id}>
          <div className={cn("section space-y-10", className)}>
            {title && h1 && <h1>{title}</h1>}
            {title && !h1 && <h2>{title}</h2>}

            {description && <p>{description}</p>}
            {children}
          </div>
        </div>
      )}
      {!center && (
        <div className={cn("section space-y-5 pt-36", className)} id={id}>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
          {children}
        </div>
      )}
    </>
  );
}
