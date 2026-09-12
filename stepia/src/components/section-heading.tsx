import { Reveal } from "@/components/reveal";

/**
 * Editorial section heading — large Marcellus wordmark, thin full-width rule,
 * right-aligned English tagline. Mirrors the reference's refined section rhythm.
 */
export function SectionHeading({
  en,
  jp,
  tagline,
  align = "left",
}: {
  en: string;
  jp: string;
  tagline?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div
        className={`flex flex-wrap items-baseline gap-x-6 gap-y-2 ${
          align === "center" ? "justify-center text-center" : "justify-between"
        }`}
      >
        <div className="flex items-baseline gap-5">
          <h2 className="font-marcellus text-5xl md:text-[5.5rem] leading-none tracking-tight">
            {en}
          </h2>
          <span className="font-barlow tracking-[0.3em] text-ink/40 text-xs">{jp}</span>
        </div>
        {tagline && (
          <p className="font-barlow tracking-[0.04em] text-ink/45 text-[11px] md:text-xs max-w-md md:text-right">
            {tagline}
          </p>
        )}
      </div>
      <div className="mt-6 h-px w-full bg-ink/15" />
    </Reveal>
  );
}
