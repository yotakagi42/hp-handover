import { motion, useReducedMotion } from 'framer-motion'
import Illust from './Illust'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const reduce = !!useReducedMotion()
  const riseFrom = reduce ? { y: 0 } : { y: '110%' }
  return (
    <section id="top" className="relative overflow-hidden pt-24">
      {/* the flowing air background is now a single fixed layer rendered in App;
          its mouse-reactive smoke is gated to this hero via #top */}
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-container flex-col items-center justify-center px-5 pb-10 pt-8 text-center lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-5 font-mono text-xs tracking-[0.3em] text-ink-soft"
        >
          THE CORE OF INNOVATION
        </motion.p>

        <h1 className="flex justify-center overflow-hidden pb-[0.08em] font-round text-[18svw] font-extrabold leading-none tracking-tight text-ink sm:text-[14svw] lg:text-[160px]">
          <motion.span
            initial={riseFrom}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 0.1, ease }}
            className="inline-block"
          >
            Zero
          </motion.span>
          <motion.span
            initial={riseFrom}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 0.22, ease }}
            className="c-colorful inline-block"
          >
            one
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-6 font-round text-xl font-bold text-ink sm:text-3xl"
        >
          ゼロから、無限の可能性へ。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-4 max-w-2xl font-jp text-base leading-loose text-ink-soft"
        >
          次世代のシステムエンジニアリングを再定義する、リーディングパートナー。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="group flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-bold text-white transition-transform hover:scale-[0.97]"
          >
            事業を見る
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <a
            href="#about"
            className="rounded-full bg-white px-7 py-4 font-bold text-ink shadow-sm ring-1 ring-black/5 transition-colors hover:bg-ink hover:text-white"
          >
            企業理念
          </a>
        </motion.div>

        {/* flat people band — gaaboo-style crowd feel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          className="mt-12 flex w-full items-end justify-center gap-2 sm:gap-6"
        >
          <Illust
            name="man-with-a-laptop"
            alt="ノートPCで作業する男性エンジニア"
            loading="eager"
            className="h-28 w-auto animate-float motion-reduce:animate-none sm:h-44 lg:h-52"
          />
          <Illust
            name="work-from-home"
            alt="リモートで働く様子"
            loading="eager"
            className="h-32 w-auto animate-float motion-reduce:animate-none sm:h-52 lg:h-64 [animation-delay:-2s]"
          />
          <Illust
            name="woman-with-a-laptop"
            alt="ノートPCで作業する女性エンジニア"
            loading="eager"
            className="h-28 w-auto animate-float motion-reduce:animate-none sm:h-44 lg:h-52 [animation-delay:-4s]"
          />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 mb-2 text-center font-mono text-[10px] tracking-widest text-ink-soft/60"
      >
        SCROLL ↓
      </motion.div>
    </section>
  )
}
