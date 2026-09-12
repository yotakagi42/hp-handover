import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { WaveDivider } from "@/components/waves";

const MENU = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Works", href: "#works" },
];

const ABOUT = [
  { label: "Company", href: "#company" },
  { label: "Member", href: "#member" },
  { label: "Recruit", href: "#recruit" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative bg-ink text-white/80 pb-10">
      <WaveDivider fill="#0d0d0d" className="-mt-px text-ink" />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-12">
        <Reveal className="text-center mb-20">
          <p className="font-barlow tracking-[0.3em] text-white/40 text-xs mb-4">CONTACT US</p>
          <a
            href="mailto:contact@stepia.jp"
            className="font-marcellus text-4xl md:text-7xl hover:text-cyan2 transition inline-block"
          >
            Let&apos;s talk →
          </a>
          <p className="text-white/40 text-sm mt-6">お問い合わせ・ご相談はお気軽に</p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 border-t border-white/10 pt-14">
          <div className="md:col-span-4">
            <Logo wordClassName="text-2xl text-white" showTag={false} />
            <p className="text-white/50 text-sm leading-loose max-w-xs mt-5">
              企業のDXの「次の一歩」に旗を立てる、DXコンサルティングファーム。
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="X" className="w-10 h-10 grid place-items-center rounded-full border border-white/20 hover:bg-white hover:text-ink transition">
                𝕏
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full border border-white/20 hover:bg-white hover:text-ink transition">
                ◎
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-barlow tracking-widest text-white text-xs mb-5">MENU</h4>
            <ul className="space-y-3 text-sm text-white/55">
              {MENU.map((m) => (
                <li key={m.href}>
                  <a href={m.href} className="hover:text-white">
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-barlow tracking-widest text-white text-xs mb-5">ABOUT</h4>
            <ul className="space-y-3 text-sm text-white/55">
              {ABOUT.map((m) => (
                <li key={m.href}>
                  <a href={m.href} className="hover:text-white">
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="font-barlow tracking-widest text-white text-xs mb-5">OFFICE</h4>
            <p className="text-sm text-white/55 leading-loose mb-3">
              東京都豊島区東池袋1丁目34番5号
              <br />
              いちご東池袋ビル6階
            </p>
            <p className="text-sm text-white/55">contact@stepia.jp</p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 text-center">
          <p className="font-barlow tracking-widest text-white/30 text-xs">
            © 2024 ステピア All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
