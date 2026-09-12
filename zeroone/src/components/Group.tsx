import Reveal from './Reveal'
import FrostPanel from './FrostPanel'
import Blob from './Blob'

export default function Group() {
  return (
    <section
      aria-label="グループの総合力"
      className="relative overflow-hidden px-5 py-24 lg:px-10 lg:py-28"
    >
      <Blob variant={1} color="#9BE000" className="-left-12 top-6 h-64 w-64 opacity-15 blur-2xl" />
      <Blob variant={0} color="#8A5CF6" className="-right-16 bottom-2 h-72 w-72 opacity-15 blur-2xl" />
      <div className="relative mx-auto max-w-container text-center">
        <Reveal>
          <FrostPanel className="mx-auto max-w-3xl">
            <p className="label-caps mb-4 text-pop-teal">GROUP ／ グループの総合力</p>
            <h2 className="font-round text-2xl font-extrabold leading-relaxed text-ink sm:text-4xl">
              個の技術力を、<span className="c-colorful">グループの総合力</span>へ。
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-jp text-base leading-loose text-ink-soft">
              インフラ・セキュリティ・研究開発――各領域の専門チームが連携し、単独では届かない規模と速度で顧客の課題に挑みます。
            </p>
          </FrostPanel>
        </Reveal>
      </div>
    </section>
  )
}
