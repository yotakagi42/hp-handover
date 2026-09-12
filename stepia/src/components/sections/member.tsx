import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Member() {
  return (
    <section id="member" className="py-28 md:py-36 bg-[linear-gradient(180deg,#ffffff_0%,#eafaf3_100%)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeading en="Member" jp="代表メッセージ" tagline="The people who build Stepia." />

        <Reveal className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-4">
            <div className="h-full min-h-72 rounded-3xl bg-[linear-gradient(135deg,#f3fbfb,#eafaf3)] border border-cyan1/15 relative overflow-hidden grid place-items-center p-6">
              <span className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-[linear-gradient(135deg,#56e1e2,#8be75f)] blur-2xl opacity-50" />
              <span className="flag absolute top-6 right-6 w-9 h-6 bg-cyan1/70 rounded-sm" />
              <img
                src="/images/illustrations/presenter.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="relative h-56 w-auto object-contain drop-shadow-[0_24px_44px_rgba(13,13,13,0.16)]"
              />
              <span className="absolute bottom-5 font-barlow tracking-[0.25em] text-ink/40 text-[11px]">
                CEO / CONSULTANT
              </span>
            </div>
          </div>
          <div className="lg:col-span-8 bg-white rounded-3xl p-9 border border-ink/5">
            <p className="font-barlow tracking-[0.3em] text-cyan1 text-xs mb-2">CEO / CONSULTANT</p>
            <h3 className="text-2xl font-bold mb-1">
              木村 美月 <span className="font-marcellus text-lg text-ink/50 ml-2">Mizuki Kimura</span>
            </h3>
            <p className="text-ink/60 leading-loose text-[15px] mt-5">
              DXコンサルタントとして10年以上、製造・小売・金融など幅広い業界の変革プロジェクトに従事。多くの企業が「変わりたいのに、進め方が見えない」と立ち止まる姿に課題を感じ、ステピアを創業。
            </p>
            <p className="text-ink/60 leading-loose text-[15px] mt-4">
              所属や業界の慣習ではなく、一社一社の「変わりたい」を起点に支援チームを編む。お客様の変革と事業成長を同じ方向へ重ねる伴走を得意とし、顧客継続率98%の支援を実現している。
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-ink/50">
              {["DX戦略", "業務改革", "組織づくり"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-cream border border-ink/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
