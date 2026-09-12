import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { OrbitBadge } from "@/components/illustrations";

const CARDS = [
  {
    no: "01",
    img: "/images/illustrations/ai.svg",
    title: "DX戦略策定",
    en: "DX STRATEGY",
    dot: "bg-cyan1",
    accent: "text-cyan1",
    groupAccent: "group-hover:text-cyan1",
    iconBg: "bg-cyan1/10",
    glow: "hover:shadow-[0_30px_60px_-30px_rgba(29,208,212,0.5)]",
    body: "経営課題とデジタル活用を紐づけたDX戦略・ロードマップの策定。現状アセスメントから投資対効果の設計まで、変革の起点をともに描きます。",
  },
  {
    no: "02",
    img: "/images/illustrations/coding.svg",
    title: "業務プロセス改革",
    en: "PROCESS RE-ENGINEERING",
    dot: "bg-pink1",
    accent: "text-pink1",
    groupAccent: "group-hover:text-pink1",
    iconBg: "bg-pink1/10",
    glow: "hover:shadow-[0_30px_60px_-30px_rgba(235,87,158,0.4)]",
    body: "業務の可視化とボトルネック分析から、BPR・自動化・データ活用までをワンチームで。現場に定着する仕組みづくりまで伴走します。",
  },
  {
    no: "03",
    img: "/images/illustrations/gears-thick.svg",
    title: "システム導入支援",
    en: "SYSTEM INTEGRATION",
    dot: "bg-blue1",
    accent: "text-blue1",
    groupAccent: "group-hover:text-blue1",
    iconBg: "bg-blue1/10",
    glow: "hover:shadow-[0_30px_60px_-30px_rgba(46,133,236,0.4)]",
    body: "SaaS選定・要件定義からベンダーマネジメント、導入・定着化まで。お客様の事業フェーズに合わせた最適なIT基盤づくりを支援します。",
  },
  {
    no: "04",
    img: "/images/illustrations/rocket-launch.svg",
    title: "DX人材育成",
    en: "DX TALENT DEVELOPMENT",
    dot: "bg-green1",
    accent: "text-green1",
    groupAccent: "group-hover:text-green1",
    iconBg: "bg-green1/10",
    glow: "hover:shadow-[0_30px_60px_-30px_rgba(30,209,128,0.4)]",
    body: "デジタル人材の育成カリキュラムと、実践型研修「Step Lab」。学び続ける文化を根づかせ、自走できるDX推進組織づくりを支援します。",
  },
];

function Card({ c }: { c: (typeof CARDS)[number] }) {
  return (
    <article
      className={`group relative h-full rounded-[1.75rem] p-8 bg-white border border-ink/5 ${c.glow} transition-transform duration-500 hover:-translate-y-2`}
    >
      <span className={`absolute top-8 left-8 w-2.5 h-2.5 rounded-full ${c.dot}`} />
      <div className="flex items-start justify-between">
        <div className={`relative w-full h-36 rounded-2xl ${c.iconBg} grid place-items-center overflow-hidden`}>
          <img
            src={c.img}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute top-8 right-8 font-barlow text-ink/25 text-sm">{c.no}</span>
      </div>
      <h3 className="text-2xl font-bold mt-6 mb-1">{c.title}</h3>
      <p className={`font-barlow tracking-widest text-xs mb-4 ${c.accent}`}>{c.en}</p>
      <p className="text-ink/60 leading-loose text-[15px] mb-6">{c.body}</p>
      <span className={`font-barlow text-xs tracking-widest text-ink/45 ${c.groupAccent} transition-colors`}>
        READ MORE →
      </span>
    </article>
  );
}

export function Service() {
  return (
    <section id="service" className="py-28 md:py-36 bg-[linear-gradient(180deg,#ffffff_0%,#f3fbfb_100%)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeading
          en="Service"
          jp="事業領域"
          tagline="Four consulting services to move your digital transformation to the next stage."
        />

        {/* Orbit diagram: central badge with 4 service nodes.
            DOM order (badge, 01, 02, 03, 04) gives a clean mobile reading order;
            lg grid placement flanks the badge (01/03 left, 02/04 right). */}
        <div className="grid gap-7 lg:gap-x-10 lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-2 items-center">
          <Reveal className="lg:col-start-2 lg:row-span-2 self-center mx-auto">
            <div className="flex flex-col items-center gap-4 py-2">
              <OrbitBadge className="w-44 h-44 md:w-56 md:h-56" />
              <p className="font-barlow tracking-[0.3em] text-ink/40 text-xs text-center">
                FOUR WAYS TO
                <br />
                THE NEXT STAGE
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" className="lg:col-start-1 lg:row-start-1">
            <Card c={CARDS[0]} />
          </Reveal>
          <Reveal variant="left" className="lg:col-start-3 lg:row-start-1">
            <Card c={CARDS[1]} />
          </Reveal>
          <Reveal variant="right" className="lg:col-start-1 lg:row-start-2">
            <Card c={CARDS[2]} />
          </Reveal>
          <Reveal variant="left" className="lg:col-start-3 lg:row-start-2">
            <Card c={CARDS[3]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
