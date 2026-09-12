import Reveal from './Reveal'
import Illust from './Illust'
import FrostPanel from './FrostPanel'
import Blob from './Blob'
import Magnetic from './Magnetic'
import InteractiveCard from './InteractiveCard'
import Parallax from './Parallax'

/** Circular-framed flat illustration with floating accent shapes. */
function OrbitArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pop-blue/10 via-pop-teal/10 to-pop-pink/10" />
      <div className="absolute inset-6 animate-spin-slower rounded-full border-2 border-dashed border-pop-blue/25 motion-reduce:animate-none" />
      {/* slow rotating rainbow ring — animated brand accent */}
      <div
        className="pointer-events-none absolute inset-3 animate-spin-slow rounded-full opacity-40 motion-reduce:animate-none [-webkit-mask:radial-gradient(farthest-side,transparent_calc(100%-3px),#000_calc(100%-3px))] [background:conic-gradient(from_0deg,#FF5DA2,#8A5CF6,#3B6CF5,#00C2A8,#9BE000,#FF5DA2)] [mask:radial-gradient(farthest-side,transparent_calc(100%-3px),#000_calc(100%-3px))]"
        aria-hidden
      />
      <div className="absolute left-1/2 top-4 h-9 w-9 -translate-x-1/2 animate-float rounded-2xl bg-pop-yellow shadow-lg motion-reduce:animate-none" />
      <div className="absolute bottom-10 left-6 h-7 w-7 animate-float rounded-full bg-pop-teal shadow-lg motion-reduce:animate-none [animation-delay:-2s]" />
      <div className="absolute bottom-16 right-6 h-8 w-8 animate-float rounded-lg bg-pop-violet shadow-lg motion-reduce:animate-none [animation-delay:-4s]" />
      <div className="absolute inset-0 flex items-center justify-center p-14">
        <Illust
          name="woman-with-a-laptop"
          alt="ノートPCで働くエンジニアのイラスト"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 lg:px-10 lg:py-32">
      {/* organic curve accents — two parallax depth layers drifting at
          different rates so they cross the section seam as you scroll */}
      <Parallax
        speed={0.35}
        className="pointer-events-none absolute -left-16 top-8 h-64 w-64 opacity-20 blur-2xl"
      >
        <Blob variant={1} color="#8A5CF6" className="!static h-full w-full" />
      </Parallax>
      <Parallax
        speed={0.24}
        className="pointer-events-none absolute -right-10 bottom-4 h-56 w-56 opacity-20 blur-2xl"
      >
        <Blob variant={2} color="#00C2A8" className="!static h-full w-full" />
      </Parallax>
      <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-12 md:grid-cols-2">
        <Reveal>
          <InteractiveCard tilt={2.5} glow="rgba(59,108,245,0.14)" className="rounded-[2.5rem]">
          <FrostPanel>
            <p className="label-caps mb-4 text-pop-blue">PHILOSOPHY ／ 企業理念</p>
            <h2 className="mb-8 font-round text-3xl font-extrabold leading-snug text-ink sm:text-4xl">
              ゼロを起点に、
              <br />
              <span className="c-colorful">イチ</span>を創る。
            </h2>
            <div className="space-y-5 font-jp text-base leading-loose text-ink-soft">
              <p>
                Zeroone の名は、「0」という出発点から、まだ世にない「1」を生み出すという意志に由来します。
              </p>
              <p>
                私たちは単なる SES 企業ではありません。エンジニア一人ひとりの創造性とシステムの論理性を結び、社会の複雑な課題を解きほぐすパートナーです。
              </p>
              <p>
                緻密なエンジニアリングと、大胆なイノベーション。その両立こそが、私たちのアイデンティティです。
              </p>
            </div>
            <Magnetic className="mt-9" strength={0.4}>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
              >
                事業を見る
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </Magnetic>
          </FrostPanel>
          </InteractiveCard>
        </Reveal>

        <Parallax speed={0.16}>
          <Reveal delay={0.15}>
            <InteractiveCard tilt={5} glow="rgba(0,194,168,0.18)" className="rounded-[2.5rem]">
              <FrostPanel className="!p-6">
                <OrbitArt />
              </FrostPanel>
            </InteractiveCard>
          </Reveal>
        </Parallax>
      </div>
    </section>
  )
}
