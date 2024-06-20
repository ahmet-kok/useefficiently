import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function HighlightComponent() {
  return (
    <HeroHighlight>
      <p
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
{/*         <Highlight className="text-black dark:text-white">
 */}          copy, of a copy, of a copy.
{/*         </Highlight>
 */}      </p>
    </HeroHighlight>
  );
}
