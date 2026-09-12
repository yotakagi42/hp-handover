import { Reveal } from "@/components/reveal";
import { HeroWaves } from "@/components/waves";

const NEWS = [
  { tag: "WORKS NEW", color: "bg-blue1/10 text-blue1", title: "大手SaaS基盤｜マイクロサービス移行プロジェクト支援", date: "2024/12/05", href: "#works" },
  { tag: "WORKS NEW", color: "bg-green1/10 text-green1", title: "小売DX｜店舗業務のデジタル化支援を開始", date: "2024/10/07", href: "#works" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-start overflow-hidden pt-36 md:pt-40 pb-28
                 bg-[radial-gradient(120%_90%_at_15%_0%,#ffffff_0%,#f3fbfb_45%,#eafaf3_100%)]"
    >
      {/* soft brand glows */}
      <div className="blob absolute -top-32 -left-24 w-[40rem] h-[40rem] bg-cyan2/20 blur-3xl" />
      <div className="blob absolute top-10 -right-32 w-[34rem] h-[34rem] bg-lime1/25 blur-3xl [animation-delay:-4s]" />

      {/* layered organic waves anchored bottom */}
      <HeroWaves />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="hero-in font-barlow tracking-[0.3em] text-cyan1 text-sm mb-6 flex items-center gap-3">
              <span className="inline-block w-10 h-px bg-cyan1" />
              STEPIA DX CONSULTING
            </p>
            <h1 className="hero-in font-marcellus leading-[1.02] text-[3rem] sm:text-7xl lg:text-[5.8rem] mb-8 tracking-tight">
              Step up to the
              <br />
              <span className="marquee-x">next stage.</span>
            </h1>
            <p className="hero-in-2 text-lg md:text-[1.4rem] font-medium leading-relaxed mb-4">
              上手に、デジタルと向き合おう。
              <br className="hidden sm:block" />
              上手に、変革のステージへ近づこう。
            </p>
            <p className="hero-in-2 text-ink/60 max-w-xl leading-loose mb-10">
              ステピアは、企業のDXの「次の一歩」に旗を立てるDXコンサルティングファームです。
              戦略策定から現場への定着までを伴走し、変革が、そのまま事業成長につながる仕組みをつくります。
            </p>
            <div className="hero-in-2 flex flex-wrap gap-4">
              <a
                href="#service"
                className="group inline-flex items-center gap-3 h-14 px-8 rounded-full bg-ink text-white font-barlow tracking-widest text-sm hover:bg-cyan1 transition-colors"
              >
                VIEW SERVICES <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#recruit"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-full border border-ink/20 bg-white/70 backdrop-blur font-barlow tracking-widest text-sm hover:border-cyan1 hover:text-cyan1 transition-colors"
              >
                JOIN THE TEAM
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:mt-0 mt-4">
            <div className="hero-in-3 floaty bg-white/90 backdrop-blur rounded-[2rem] p-8 shadow-[0_40px_80px_-30px_rgba(13,13,13,0.28)] border border-white/60">
              <p className="font-barlow tracking-[0.25em] text-ink/40 text-xs mb-2">
                DX PROJECTS
              </p>
              <div className="flex items-end gap-3">
                <span className="font-marcellus text-7xl leading-none text-cyan1">218</span>
                <span className="text-ink/50 mb-2 text-sm">件 / 累計支援実績</span>
              </div>
              <div className="h-px bg-ink/10 my-5" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-marcellus text-3xl text-green1">
                    98<span className="text-xl">%</span>
                  </p>
                  <p className="text-xs text-ink/50 mt-1">顧客継続率</p>
                </div>
                <div>
                  <p className="font-marcellus text-3xl text-pink1">
                    120<span className="text-xl">+</span>
                  </p>
                  <p className="text-xs text-ink/50 mt-1">取引パートナー</p>
                </div>
                <div>
                  <p className="font-marcellus text-3xl text-blue1">
                    50<span className="text-xl">万</span>
                  </p>
                  <p className="text-xs text-ink/50 mt-1">年間研修支援</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-4">
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={i * 100}>
              <a
                href={n.href}
                className="group block bg-white/90 backdrop-blur rounded-2xl p-5 border border-white/60 shadow-[0_20px_50px_-30px_rgba(13,13,13,0.4)] hover:shadow-[0_30px_60px_-25px_rgba(29,208,212,0.5)] hover:-translate-y-1 transition-all"
              >
                <span
                  className={`inline-block font-barlow text-[10px] tracking-widest px-2 py-1 rounded-full mb-3 ${n.color}`}
                >
                  {n.tag}
                </span>
                <p className="text-sm font-medium leading-snug group-hover:text-cyan1 transition-colors">
                  {n.title}
                </p>
                <p className="text-xs text-ink/40 mt-3 font-barlow">{n.date} →</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
