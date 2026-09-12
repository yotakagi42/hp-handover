import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const PILLARS = [
  {
    en: "VISION",
    color: "text-pink1",
    ring: "before:bg-pink1",
    title: "Step the stage.",
    body: "一社一社の発想と挑戦に、輝く舞台を。デジタルを起点にした新しい事業のかたちをつくり、お客様が主役になれる変革の道を切り拓きます。",
  },
  {
    en: "MISSION",
    color: "text-blue1",
    ring: "before:bg-blue1",
    title: "技術を、自分の言葉に。",
    body: "常に驚きと発見のある“新しいデジタル活用”に挑み続け、お客様が誇りを持って語れる変革と、選ばれ続けるコンサルティングのモデルケースをつくります。",
  },
  {
    en: "VALUE",
    color: "text-green1",
    ring: "before:bg-green1",
    title: "全員、主人公へ。",
    body: "ステピアが提案するのは、部署や立場を超えてつながる“課題ドリブン”な新しい連携スタイル。お客様の挑戦を、チーム全員で後押しします。",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-40 bg-[linear-gradient(180deg,#eafaf3_0%,#ffffff_36%)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeading
          en="About"
          jp="私たちについて"
          tagline="Stepia is a DX consulting firm that empowers each company to climb to its own next stage."
        />

        <Reveal className="grid lg:grid-cols-12 gap-10 items-center mb-28">
          <div className="lg:col-span-4">
            <span className="font-barlow tracking-[0.3em] text-cyan1 text-sm">WHO WE ARE</span>
            <div className="mt-5 relative h-60 rounded-[1.75rem] bg-[linear-gradient(135deg,#f3fbfb,#eafaf3)] border border-cyan1/15 overflow-hidden grid place-items-center">
              <span className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[linear-gradient(135deg,#56e1e2,#e1f975)] blur-2xl opacity-50" />
              <img
                src="/images/illustrations/roadmap.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="relative h-44 w-auto object-contain"
              />
            </div>
          </div>
          <div className="lg:col-span-8 text-ink/70 leading-loose text-lg">
            <p className="mb-6">
              ステピアは、「デジタルで、自分らしく変わる」を合言葉に企業の変革へ伴走するDXコンサルティングファームです。
              業界の慣習やこれまでのやり方にとらわれず、一社一社の「変わりたい」を起点に支援チームを編成します。
            </p>
            <p>
              柔軟なプロジェクト進行で、お客様の潜在的な経営課題の発掘から実行・定着までを伴走。
              現場の納得感と、事業の成長を、同じ方向へ重ねていきます。
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-7">
          {PILLARS.map((p, i) => (
            <Reveal key={p.en} delay={i * 100}>
              <div
                className={`relative h-full bg-white rounded-[1.75rem] p-9 border border-ink/5 shadow-[0_30px_60px_-45px_rgba(13,13,13,0.4)] overflow-hidden
                            before:absolute before:top-0 before:left-0 before:h-1 before:w-full ${p.ring}`}
              >
                <span className={`font-barlow tracking-[0.3em] text-xs ${p.color}`}>{p.en}</span>
                <h3 className="font-marcellus text-3xl mt-4 mb-4">{p.title}</h3>
                <p className="text-ink/60 leading-loose text-[15px]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
