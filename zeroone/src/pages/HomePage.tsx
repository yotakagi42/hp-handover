import { useEffect, useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import Intro from '../components/Intro'
import Hud from '../components/Hud'
import SmokeBackground from '../components/SmokeBackground'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Numbered from '../components/Numbered'
import Why from '../components/Why'
import Services from '../components/Services'
import Group from '../components/Group'
import Topics from '../components/Topics'
import Careers from '../components/Careers'
import Contact from '../components/Contact'
import GiantMarquee from '../components/GiantMarquee'
import Footer from '../components/Footer'

export default function HomePage() {
  const reduce = !!useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  // Live page progress handed to the shader as a plain ref, so the page-wide
  // colour field migrates with scroll without re-rendering React each frame.
  const scrollRef = useRef(0)
  useEffect(() => {
    scrollRef.current = scrollYProgress.get()
    const unsub = scrollYProgress.on('change', (v) => {
      scrollRef.current = v
    })
    return unsub
  }, [scrollYProgress])

  // Sticky hero hand-off: as the first screenful scrolls away the hero recedes
  // (scales down + fades) while the content below rises over it — a continuous
  // scroll-driven transition rather than two hard-cut stacked blocks.
  const heroScale = useTransform(scrollYProgress, [0, 0.14], [1, 0.9])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  const sections = (
    <>
      <About />
      <Numbered />
      <Why />
      <Services />
      <Group />
      <Topics />
      <Careers />
      <Contact />
    </>
  )

  return (
    <div className="relative">
      {/* single flowing-air field fixed behind the entire page; its hue and
          density migrate with scroll (scrollRef); mouse smoke gated to the hero */}
      <SmokeBackground
        reduced={reduce}
        interactiveSelector="#top"
        scrollRef={scrollRef}
        className="fixed inset-0 z-0"
      />
      {/* all content sits above the air field and is transparent so it shows through */}
      <div className="relative z-10">
        <Intro />
        <motion.div
          style={{ scaleX }}
          className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-pop-blue via-pop-pink to-pop-yellow"
        />
        <Navbar />
        <Hud />
        <main>
          {reduce ? (
            <>
              <Hero />
              {sections}
            </>
          ) : (
            <div className="relative">
              {/* pinned hero the page scrolls over */}
              <motion.div
                style={{ scale: heroScale, opacity: heroOpacity }}
                className="sticky top-0 z-0"
              >
                <Hero />
              </motion.div>
              {/* content curtain rises over the hero's lower half */}
              <div className="relative z-10 -mt-[22vh] sm:-mt-[16vh]">{sections}</div>
            </div>
          )}
        </main>
        <GiantMarquee text="ZEROONE" scrollProgress={scrollYProgress} />
        <Footer />
      </div>
    </div>
  )
}
