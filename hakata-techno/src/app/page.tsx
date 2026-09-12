/* eslint-disable @next/next/no-img-element */
// 参考デザインのトップページのDOM構造を踏襲したページ。
// クラス名はスタイル定義のCSSセレクタと対応しているため変更しないこと。
import type { Metadata } from "next";
import Header from "@/components/Header";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionMessage from "@/components/SectionMessage";
import Footer from "@/components/Footer";
import FaqTabs from "@/components/FaqTabs";
import TopLoading from "@/components/TopLoading";
import HeroTitle from "@/components/HeroTitle";

export const metadata: Metadata = {
  title: "株式会社博多テクノ | HAKATA TECHNO",
  description:
    "博多から世界へ。株式会社博多テクノは、最先端のクラウド技術と一人ひとりの個性を大切にする文化で、あなたのエンジニアキャリアを最高のものにします。",
};

const STRENGTHS = [
  {
    num: "01",
    en: "SKILL UP PROGRAM",
    lead: (
      <>
        頑張った分だけ、
        <br />
        キャリアと給料に
        <br />
        還る仕組み。
      </>
    ),
    text: (
      <>
        年間100万円までの学習支援予算とUdemy無料受講に加え、外部講師によるオンライン・オフラインの研修会も実施。AWS認定をはじめとする資格取得率は70%を突破しています。
      </>
    ),
    img: "/img/index/img_strength_01.webp",
  },
  {
    num: "02",
    en: "OUR CULTURE",
    lead: (
      <>
        どんな経歴でも、
        <br />
        ここからキャリアは
        <br />
        始められる。
      </>
    ),
    text: (
      <>
        ブルーカラーでも、経歴がなくても、資格やスキルがなくても関係ありません。
        <br />
        大切なのは、頑張りたいという気持ちだけ。代表自身も未経験からIT事務を経てエンジニアになった一人です。
        <br />
        福岡・博多で新しいキャリアを始めたい、その想いがあれば、博多テクノはいつでも力になります。
      </>
    ),
    img: "/img/index/img_strength_02.webp",
  },
  {
    num: "03",
    en: "FOLLOW-UP SUPPORT",
    lead: (
      <>
        挑戦を、メンターが
        <br />
        全力バックアップ。
      </>
    ),
    text: (
      <>
        あなたの未来に寄り添うパートナー。案件でのスキルアップはもちろん、現場での悩みや人間関係、今後のキャリア形成まで、メンターと営業チームが一人ひとりに向き合い、手厚くフォローします。
      </>
    ),
    img: "/img/index/img_strength_03.webp",
  },
  {
    num: "04",
    en: "SALES POWER",
    lead: (
      <>
        圧倒的な案件力が、
        <br />
        あなたの「最高」を叶える。
      </>
    ),
    text: (
      <>
        九州を中心に、Web開発からクラウドインフラまで常時多数の案件を保有。
        <br />
        身につけたい技術、勤務地、リモート可否、働き方。どんなキャリアプランも叶えられるよう、営業チームが交渉します。
      </>
    ),
    img: "/img/index/img_strength_04.webp",
  },
];

function TitleLine({ color }: { color: "blue" | "orange" }) {
  return (
    <div className={`section-titleline section-titleline-${color}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.13 40.048">
        <g id="line-group" transform="translate(1059.031 -4786.982)">
          <path
            d="M0,13.662.6,1.734.661.5"
            transform="translate(-1016.184 4789.105)"
            fill="none"
            strokeLinecap="round"
            strokeWidth="5"
          />
          <path
            d="M5.12,9.387.48,1.333,0,.5"
            transform="translate(-1037.304 4798.38)"
            fill="none"
            strokeLinecap="round"
            strokeWidth="5"
          />
          <path
            d="M15,14,0,.5"
            transform="translate(-1055.5 4809.5)"
            fill="none"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <TopLoading />
      <Header />
      <main className="bodywrapper">
        <div className="loading">
          <div className="loading-inner">
            <div className="indexkv-title">
              <img
                src="/img/common/kv_logo.svg"
                alt="博多テクノ HAKATA TECHNO"
                width={394}
                height={110}
              />
            </div>
          </div>
        </div>
        <div className="indexkv">
          <div className="indexkv-tentative">
            <img
              src="/img/index/kv.webp"
              alt="イメージ画像"
              width={1440}
              height={780}
            />
          </div>
          <HeroTitle />
          <span className="deco-dot twinkle-01 deco-dot-indexkv-01 bg-lightblue"></span>
          <span className="deco-dot twinkle-02 deco-dot-indexkv-02 bg-blue"></span>
        </div>
        <div className="wrapper">
          <section className="indexintro">
            <div className="inner">
              <h2 className="indexintro-title animation animation-title">
                博多テクノで広がる
                <br />
                <span className="marker-large animation-marker animation-indexintro">
                  あなたの<span className="font-border-black">無限の可能性</span>。
                </span>
              </h2>
            </div>
            <span className="deco-geometry-01 deco-geometry-indexintro-01 animation animation-slide-leftangle"></span>
            <span className="deco-shape-01 deco-shape-indexintro-01"></span>
            <span className="deco-dot twinkle-03 deco-dot-indexintro-01 bg-lightblue"></span>
            <span className="deco-dot twinkle-04 deco-dot-indexintro-02 bg-blue"></span>
          </section>
          <section className="indexconcept">
            <div className="inner">
              <div className="indexconcept-block">
                <div className="indexconcept-summary">
                  <h2 className="section-title-en font-en indexconcept-title font-border-blue animation">
                    CONCEPT
                  </h2>
                  <p className="section-lead animation animation-title">
                    博多テクノが大切にしているのは、
                    <br />
                    学歴や経歴に関係なく、
                    <br />
                    <span className="fc-blue">
                      誰もがエンジニアに挑戦できること。
                    </span>
                  </p>
                  <p className="section-text animation">
                    代表自身、研修も資格サポートもない環境からこの業界に飛び込み、
                    <br className="pc" />
                    独学で資格を取ってきました。
                    <br />
                    その経験を活かし、学びと伴走の揃った研修プログラムをつくることで、
                    <br />
                    入社1年後の資格取得率は7割を超え、
                    <br className="pc" />
                    頑張った分だけキャリアとお給料に還る仕組みを整えています。
                    <br />
                    <br />
                    <b>「スキルも経験もない自分には、無理かもしれない。」</b>
                    <br />
                    <br />
                    そんな思い込みに縛られる必要はありません。
                    <br />
                    クラウド技術への挑戦も、キャリアアップも、収入アップも。
                    <br />
                    挑戦するたびに、あなたの可能性は空へ広がっていきます。
                    <br />
                    博多テクノは、あなたの未来に伴走しながら、
                    <br />
                    まだ見ぬ可能性を現実へ変えていくパートナーです。
                  </p>
                </div>
                <div className="indexconcept-image animation">
                  <img
                    src="/img/index/img_concept.webp"
                    alt="イメージイラスト"
                    width={570}
                    height={442}
                  />
                </div>
              </div>
            </div>
            <span className="deco-dots-01 floating-dots-01 deco-dots-indexconcept-01"></span>
            <span className="deco-dot twinkle-05 deco-dot-indexconcept-01 bg-blue"></span>
          </section>
          <section className="indexreason">
            <div className="inner">
              <div className="indexreason-block">
                <div className="indexreason-summary">
                  <div className="section-title-wrapper animation">
                    <h2 className="section-title">
                      選ばれ続ける<span className="font-border-black">理由</span>
                    </h2>
                    <TitleLine color="orange" />
                    <div className="indexreason-title-image">
                      <img
                        src="/img/common/img_binoculars.webp"
                        alt="双眼鏡イラスト"
                        width={108}
                        height={82}
                      />
                    </div>
                  </div>
                  <p className="section-lead animation animation-title">
                    挑戦できる環境が、
                    <br />
                    <span className="fc-orange">未来を理想に変える。</span>
                  </p>
                  <p className="section-text animation">
                    博多テクノが大切にしているのは、会社都合ではなく
                    <br />
                    一人ひとりのキャリアを最大化する考え方です。
                    <br />
                    AWS・Azure・GCPを中心としたクラウドネイティブな開発環境と、
                    <br />
                    年間100万円までの学習支援を通じて、学歴や経験に関係なく、
                    <br />
                    自分のペースで着実にスキルを積んでいける環境を整えています。
                    <br />
                    <br />
                    <b>
                      「AIに仕事を取られたくない」
                      <br />
                      「クラウド技術に挑戦したい」
                      <br />
                      「市場価値を高めたい」
                    </b>
                    <br />
                    <br />
                    そんな想いを持つ一人ひとりが、
                    <br />
                    自分らしく活躍できる場所であり続けること。それが私たちの目指す姿です。
                  </p>
                </div>
                <div className="indexreason-image animation">
                  <img
                    src="/img/index/img_reason.webp"
                    alt="イメージイラスト"
                    width={642}
                    height={356}
                  />
                </div>
              </div>
            </div>
            <span className="deco-shape-02 deco-shape-indexreason-01"></span>
            <span className="deco-dot twinkle-06 deco-dot-indexreason-01 bg-blue"></span>
            <span className="deco-dot twinkle-01 deco-dot-indexreason-02 bg-orange"></span>
            <span className="deco-dot twinkle-02 deco-dot-indexreason-03 bg-lightblue"></span>
            <span className="deco-dot twinkle-03 deco-dot-indexreason-04 bg-yellow"></span>
          </section>
          <section className="indexses">
            <div className="inner">
              <div className="indexses-block">
                <div className="section-summary">
                  <h2 className="indexses-block-title">
                    <span className="section-title-en font-en font-border-orange animation">
                      About SES
                    </span>
                    <b className="fc-orange animation animation-title">
                      「SES業界」って？
                    </b>
                  </h2>
                  <p className="section-text animation">
                    SESとは、企業のプロジェクトに参加し、システム開発やITサポートを行う仕事です。
                    <br />
                    <br />
                    自社に所属しながら、さまざまな企業のプロジェクトに関わることができるため、実践を通して幅広い経験やスキルを身につけられるのが特徴です。
                    <br />
                    年功序列ではなく実力主義の業界だからこそ、頑張った分だけ評価され、最短で理想のキャリアに近づいていける。いろいろな現場で学びながら成長できるので、IT業界でキャリアをスタートしたい人にとって、チャンスの多い環境です。
                  </p>
                </div>
                <div className="indexses-block-image animation">
                  <img
                    src="/img/index/img_ses_01.webp"
                    alt="ses業界説明イラスト"
                    width={578}
                    height={325}
                  />
                </div>
              </div>
            </div>
            <div className="indexses-image animation animation-image">
              <img
                src="/img/common/img_person_01.webp"
                alt="イメージイラスト"
                width={257}
                height={200}
              />
            </div>
            <span className="deco-geometry-02 deco-geometry-indexses-01 animation animation-slide-rightangle"></span>
            <span className="deco-dots-02 floating-dots-02 deco-dots-indexses-01"></span>
            <span className="deco-dots-03 floating-dots-03 deco-dots-indexses-02"></span>
            <span className="deco-dot twinkle-04 deco-dot-indexses-01 bg-orange"></span>
          </section>
          <section className="indexstrength">
            <div className="inner">
              <h2 className="section-title-en indexstrength-title lightgray font-en font-border-blue animation">
                STRENGTH
              </h2>
              <p className="section-lead animation animation-title">
                <span className="fc-blue">~博多テクノが選ばれる4つの強み~</span>
                <br />
                研修・カルチャー・
                <br className="sp" />
                フォロー体制・案件力
              </p>
              <ul className="indexstrength-list">
                {STRENGTHS.map((s) => (
                  <li className="animation" key={s.num}>
                    <h3 className="indexstrength-list-title">
                      <b className="font-en font-border-blue">{s.num}</b>
                      <span className="font-en font-border-blue">{s.en}</span>
                    </h3>
                    <div className="indexstrength-list-block">
                      <div className="indexstrength-list-summary">
                        <p className="indexstrength-list-lead">{s.lead}</p>
                        <p className="section-text">{s.text}</p>
                      </div>
                      <div className="indexstrength-list-image">
                        <img
                          src={s.img}
                          alt="イメージイラスト"
                          width={248}
                          height={201}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <span className="deco-shape-03 deco-shape-indexstrength-01"></span>
            <span className="deco-dots-05 floating-dots-04 deco-dots-indexstrength-01"></span>
            <span className="deco-dot twinkle-05 deco-dot-indexstrength-01 bg-lightblue"></span>
            <span className="deco-dot twinkle-06 deco-dot-indexstrength-02 bg-blue"></span>
            <span className="deco-dot twinkle-01 deco-dot-indexstrength-03 bg-yellow"></span>
          </section>
          <section className="indexfaq" id="indexfaq">
            <div className="inner">
              <h2 className="section-title text-center fc-orange animation animation-title">
                よくある質問
              </h2>
              <FaqTabs />
            </div>
            <span className="deco-shape-04 deco-shape-indexfaq-01"></span>
            <span className="deco-dots-01 floating-dots-05 deco-dots-indexfaq-01"></span>
          </section>
          <section className="indexrecruitment">
            <div className="inner">
              <h2 className="section-title-en fc-lightgray text-center font-en font-border-orange animation animation-title">
                Recruitment
              </h2>
              <p className="section-text text-center animation">
                経歴も、資格も、今のスキルも関係ない。
              </p>
              <div className="indexrecruitment-block">
                <div className="indexrecruitment-block-summary">
                  <div className="section-title-wrapper animation">
                    <h2 className="section-title">
                      仲間を<span className="font-border-black">募集</span>
                      しています。
                    </h2>
                    <TitleLine color="orange" />
                  </div>
                  <p className="section-text animation">
                    大切なのは、頑張りたいという気持ちだけ。ブルーカラーの経験しかない方も、IT業界が未経験の方も、資格やスキルに自信がない方も大歓迎です。
                    <br />
                    代表自身も、未経験からIT事務を経てエンジニアになった一人です。
                    <br />
                    入社後は、研修プログラムやUdemyでの動画学習、外部講師による研修会を通じて、着実に力をつけていける環境があります。
                    <br />
                    資格取得率は入社1年後で70%を突破。頑張った分だけ、キャリアと給料にちゃんと還る仕組みも整っています。
                    <br />
                    メンターと営業チームがあなたに向き合い、理想の案件・キャリアをサーチ・交渉します。
                    <br />
                    新しい一歩を、博多テクノで踏み出しませんか。
                  </p>
                </div>
                <div className="indexrecruitment-block-image-wrapper animation">
                  <div className="indexrecruitment-block-image-01">
                    <img
                      src="/img/index/img_recruitment_01.webp"
                      alt="イメージイラスト"
                      width={597}
                      height={202}
                    />
                  </div>
                  <div className="indexrecruitment-block-image-02">
                    <img
                      src="/img/index/img_recruitment_02.webp"
                      alt="イメージイラスト"
                      width={597}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="indexrecruitment-image indexrecruitment-image-01 animation animation-image">
              <img
                src="/img/common/img_person_02.webp"
                alt="イメージイラスト"
                width={153}
                height={318}
              />
            </div>
            <div className="indexrecruitment-image indexrecruitment-image-02 animation animation-image">
              <img
                src="/img/common/img_person_03.webp"
                alt="イメージイラスト"
                width={174}
                height={310}
              />
            </div>
            <span className="deco-geometry-03 deco-geometry-indexrecruitment-01 animation animation-slide-rightangle"></span>
            <span className="deco-geometry-01 deco-geometry-indexrecruitment-02 animation animation-slide-leftangle"></span>
            <span className="deco-shape-05 deco-shape-indexrecruitment-01"></span>
            <span className="deco-dots-02 floating-dots-01 deco-dots-indexrecruitment-01"></span>
            <span className="deco-dots-04 floating-dots-02 deco-dots-indexrecruitment-02"></span>
            <span className="deco-dot twinkle-02 deco-dot-indexrecruitment-01 bg-blue"></span>
            <span className="deco-dot twinkle-03 deco-dot-indexrecruitment-02 bg-lightblue"></span>
            <span className="deco-dot twinkle-04 deco-dot-indexrecruitment-03 bg-orange"></span>
          </section>
          <SectionMessage />
        </div>
      </main>
      <Footer />
    </>
  );
}
