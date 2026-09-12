import { Reveal } from "@/components/reveal";

export function Recruit() {
  return (
    <section id="recruit" className="py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 bg-[linear-gradient(120deg,#1dd0d4,#1ed180_55%,#8be75f)]">
            <div className="absolute inset-0 pointer-events-none">
              <span className="flag absolute top-10 left-[12%] w-10 h-7 bg-white/70 rounded-sm" />
              <span className="flag absolute bottom-12 right-[18%] w-12 h-8 bg-white/50 rounded-sm [animation-delay:-1.2s]" />
              <span className="flag absolute top-1/2 right-[8%] w-8 h-6 bg-white/60 rounded-sm [animation-delay:-0.6s]" />
            </div>
            {/* embedded illustration filling the banner's right whitespace */}
            <div className="hidden md:grid place-items-center absolute top-1/2 right-6 lg:right-14 -translate-y-1/2 w-56 lg:w-72 h-56 lg:h-72 rounded-full bg-white/25 backdrop-blur-sm">
              <img
                src="/images/illustrations/fistpump.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="floaty w-40 lg:w-52 drop-shadow-[0_24px_40px_rgba(13,13,13,0.28)]"
              />
            </div>
            <div className="relative z-10 max-w-2xl text-white">
              <span className="font-barlow tracking-[0.3em] text-white/80 text-sm">RECRUIT</span>
              <h2 className="font-marcellus text-4xl md:text-6xl my-6 leading-tight">
                Grow with us.
                <br />
                次のステージへ、共に。
              </h2>
              <p className="text-white/90 leading-loose mb-10">
                年間最大50万円の学習支援、フルリモート・フルフレックス、専門性に応じたメンター制度。
                企業の変革に伴走したいコンサルタントの「次の一歩」を、ステピアで。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center h-14 px-9 rounded-full bg-white text-ink font-barlow tracking-widest text-sm font-semibold hover:scale-[1.03] transition"
                >
                  CAREER PATHS →
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center h-14 px-9 rounded-full border border-white/60 text-white font-barlow tracking-widest text-sm hover:bg-white/10 transition"
                >
                  採用情報を見る
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
