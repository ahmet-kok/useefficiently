import { cn } from "@/lib/utils";

export default function Component({
  title,
  description,
  children,
  center = false,
  className,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <>
      {center && (
        <div className={"min-h-[75vh] flex items-center"}>
          <div className={cn("component space-y-10", className)}>
            {title && <h1>{title}</h1>}
            {description && <p>{description}</p>}
            {children}
          </div>
        </div>
      )}
      {!center && (
        <div className={cn("component space-y-5", className)}>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
          {children}
        </div>
      )}
    </>
  );
}
