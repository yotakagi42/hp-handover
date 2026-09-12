import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const ROWS = [
  { k: "社名", v: "株式会社stepia" },
  { k: "事業内容", v: "DXコンサルティング" },
  { k: "所在地", v: "東京都豊島区東池袋1丁目34番5号 いちご東池袋ビル6階" },
  { k: "代表", v: "木村 美月" },
  { k: "連絡先", v: "contact@stepia.jp" },
];

export function Company() {
  return (
    <section id="company" className="py-28 md:py-36 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeading en="Company" jp="会社概要" tagline="Corporate profile." />
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7">
            <dl className="divide-y divide-ink/10">
              {ROWS.map((r) => (
                <div key={r.k} className="grid grid-cols-3 gap-4 py-5">
                  <dt className="font-barlow text-sm tracking-widest text-ink/40">{r.k}</dt>
                  <dd className="col-span-2">{r.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal variant="left" className="lg:col-span-5">
            <div className="relative grid place-items-center rounded-[2rem] bg-[linear-gradient(135deg,#f3fbfb,#eafaf3)] border border-cyan1/15 p-10 min-h-72 overflow-hidden">
              <span className="absolute -bottom-10 -right-8 w-40 h-40 rounded-full bg-[linear-gradient(135deg,#56e1e2,#e1f975)] blur-2xl opacity-50" />
              <img
                src="/images/illustrations/reception.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="relative h-60 w-auto object-contain drop-shadow-[0_24px_44px_rgba(13,13,13,0.16)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
