import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  /** 英語ラベル（label-caps で表示） */
  labelEn: string
  title: ReactNode
  lead?: string
  children: ReactNode
}

const ease = [0.22, 1, 0.36, 1] as const

/** 下層ページ共通の骨格。トップと違い背景シェーダーは持たず、紙色ベースで軽く保つ。 */
export default function SubpageLayout({ labelEn, title, lead, children }: Props) {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <header className="px-5 pb-14 lg:px-10">
          <div className="mx-auto max-w-container">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="label-caps mb-4 text-pop-blue"
            >
              {labelEn}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="font-round text-4xl font-extrabold leading-tight text-ink sm:text-5xl"
            >
              {title}
            </motion.h1>
            {lead && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease }}
                className="mt-6 max-w-2xl font-jp text-base leading-loose text-ink-soft"
              >
                {lead}
              </motion.p>
            )}
          </div>
        </header>
        {children}
      </main>
      <Footer />
    </div>
  )
}
