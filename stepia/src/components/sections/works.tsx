import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const WORKS = [
  { label: "SaaS Platform", grad: "bg-[linear-gradient(135deg,#2e85ec,#56e1e2)]", text: "text-white", cat: "システム導入支援", catColor: "text-blue1", title: "大手SaaS基盤｜マイクロサービス移行", tags: "構想策定｜導入支援｜内製化支援" },
  { label: "Retail DX", grad: "bg-[linear-gradient(135deg,#eb579e,#ffa41c)]", text: "text-white", cat: "業務プロセス改革", catColor: "text-pink1", title: "小売DX｜店舗業務のデジタル化支援", tags: "業務可視化｜アプリ導入｜定着化" },
  { label: "FinTech", grad: "bg-[linear-gradient(135deg,#1ed180,#8be75f)]", text: "text-white", cat: "DX戦略策定", catColor: "text-green1", title: "金融｜決済領域のDXロードマップ策定", tags: "現状分析｜戦略策定｜実行支援" },
  { label: "HealthTech", grad: "bg-[linear-gradient(135deg,#0547e6,#2e85ec)]", text: "text-white", cat: "システム導入支援", catColor: "text-blue2", title: "医療スタートアップ｜予約基盤の構築支援", tags: "要件定義｜ベンダー選定｜導入伴走" },
  { label: "Logistics", grad: "bg-[linear-gradient(135deg,#fad905,#8be75f)]", text: "text-ink", cat: "業務プロセス改革", catColor: "text-orange1", title: "物流｜配送業務の最適化・データ活用支援", tags: "データ基盤｜業務改善｜内製化" },
  { label: "EdTech", grad: "bg-[linear-gradient(135deg,#56e1e2,#e1f975)]", text: "text-ink", cat: "DX人材育成", catColor: "text-cyan1", title: "教育｜社内DX人材育成プログラム設計", tags: "カリキュラム開発｜研修｜メンタリング" },
];

export function Works() {
  return (
    <section id="works" className="py-28 md:py-36 bg-[linear-gradient(180deg,#f3fbfb_0%,#ffffff_60%)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeading en="Works" jp="実績紹介" tagline="Selected DX consulting projects across industries." />

        <div className="grid md:grid-cols-3 gap-6">
          {WORKS.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 80}>
              <article className="group rounded-3xl overflow-hidden bg-white border border-ink/5 hover:shadow-xl transition h-full">
                <div className={`h-44 grid place-items-center font-marcellus text-2xl ${w.grad} ${w.text}`}>
                  {w.label}
                </div>
                <div className="p-6">
                  <p className={`font-barlow text-[11px] tracking-widest mb-2 ${w.catColor}`}>{w.cat}</p>
                  <h3 className="font-bold leading-snug mb-3">{w.title}</h3>
                  <p className="text-xs text-ink/50">{w.tags}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
