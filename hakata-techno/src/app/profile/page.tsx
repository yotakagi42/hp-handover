/* eslint-disable @next/next/no-img-element */
// 参考デザインのプロフィールページのDOM構造を踏襲したページ。
// クラス名はスタイル定義のCSSセレクタと対応しているため変更しないこと。
import type { Metadata } from "next";
import Header from "@/components/Header";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionMessage from "@/components/SectionMessage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "企業情報 | 株式会社博多テクノ",
  description:
    "株式会社博多テクノの企業情報。企業理念・代表メッセージ・会社概要をご紹介します。",
};

const COMPANY_TABLE = [
  { dt: "会社名", dd: <>株式会社博多テクノ</> },
  { dt: "代表名", dd: <>代表取締役　松本 悠吾</> },
  {
    dt: "住所",
    dd: <>〒812-0011 福岡県福岡市博多区博多駅前1丁目23番2号 ParkFront博多駅前1丁目 5F-B</>,
  },
  { dt: "事業内容", dd: <>エンジニア派遣事業（SES事業）</> },
  {
    dt: "メールアドレス",
    dd: <a href="mailto:contact@hakata-techno.tech">contact@hakata-techno.tech</a>,
  },
];

export default function ProfilePage() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main className="bodywrapper">
        <div className="wrapper">
          <div className="pages pagesprofile">
            <div className="pages-head">
              <div className="inner">
                <h1 className="pages-head-title animation-title">
                  <strong className="pages-head-title-en font-en font-border-blue">
                    Profile
                  </strong>
                  <span className="pages-head-title-jp">企業情報</span>
                </h1>
                <div className="pages-head-image floating-pages-head">
                  <img
                    src="/img/index/kv_img_08.webp"
                    alt="人々イラスト"
                    width={274}
                    height={216}
                  />
                </div>
              </div>
            </div>
            <div className="pages-body pages-body-sticky">
              <div className="inner">
                <div className="pages-sticky">
                  <div className="pages-nav">
                    <div className="pages-nav-inner">
                      <ul className="pages-nav-list">
                        <li>
                          <a href="#pagesphilosophy" className="is-current">
                            <span className="pages-nav-text">
                              <span className="pages-nav-en font-en">
                                Philosophy
                              </span>
                              <span className="pages-nav-jp">企業理念</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#pagesmessage">
                            <span className="pages-nav-text">
                              <span className="pages-nav-en font-en">
                                Message
                              </span>
                              <span className="pages-nav-jp">
                                代表メッセージ
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#pagescompany">
                            <span className="pages-nav-text">
                              <span className="pages-nav-en font-en">
                                Company
                              </span>
                              <span className="pages-nav-jp">会社概要</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pages-main">
                    <section
                      className="pages-section pagesphilosophy"
                      id="pagesphilosophy"
                    >
                      <h2 className="pages-sechead">
                        <strong className="pages-sechead-en font-en font-border-blue animation animation-title">
                          Philosophy
                        </strong>
                        <span className="pages-sechead-jp animation">
                          企業理念 - Mission / Vision / Value
                        </span>
                      </h2>
                      <ul className="pagesphilosophy-list">
                        <li>
                          <h3 className="pagesphilosophy-list-title animation">
                            <b className="pagesphilosophy-list-title-en font-en font-border-blue">
                              Mission
                            </b>
                            <span className="pagesphilosophy-list-title-jp">
                              私たちの使命
                            </span>
                          </h3>
                          <p className="section-lead animation animation-title">
                            挑戦するたび、
                            <br />
                            <span className="fc-blue">可能性が空へ広がる。</span>
                          </p>
                          <p className="section-text animation">
                            エンジニア一人ひとりが、自分の市場価値を自分の力で高めていける環境をつくること。クラウドネイティブな開発環境と学びの仕組みを通じて、学歴や経歴に縛られない、まっすぐなキャリアを実現します。
                          </p>
                        </li>
                        <li>
                          <h3 className="pagesphilosophy-list-title animation">
                            <b className="pagesphilosophy-list-title-en font-en font-border-orange">
                              Vision
                            </b>
                            <span className="pagesphilosophy-list-title-jp">
                              私たちの目指す未来
                            </span>
                          </h3>
                          <p className="section-lead animation animation-title">
                            福岡から、
                            <br />
                            <span className="fc-orange">
                              エンジニアの新しいスタンダード
                            </span>
                            を。
                          </p>
                          <p className="section-text animation">
                            働き方も、報酬も、身につける技術も。すべてを会社都合ではなく、エンジニア自身が主体的に選択できる。その「当たり前」を博多から業界のスタンダードに変えていくことが、私たちの目指す未来です。
                          </p>
                        </li>
                        <li>
                          <h3 className="pagesphilosophy-list-title animation">
                            <b className="pagesphilosophy-list-title-en font-en font-border-yellow">
                              Value
                            </b>
                            <span className="pagesphilosophy-list-title-jp">
                              私たちの価値観
                            </span>
                          </h3>
                          <p className="section-lead animation animation-title">
                            挑戦する人に、
                            <br />
                            <span className="fc-yellow">まっすぐ応える。</span>
                          </p>
                          <p className="section-text animation">
                            エンジニアファーストを何よりも大切に、一人ひとりの「成長したい」「挑戦したい」という想いにチーム全員で全力で応えます。実務のフォローからキャリア形成まで、あなたの未来に伴走し続けます。
                          </p>
                        </li>
                      </ul>
                      <span className="deco-shape-02 deco-shape-pagesphilosophy-01"></span>
                      <span className="deco-shape-04 deco-shape-pagesphilosophy-02"></span>
                      <span className="deco-dots-01 floating-dots-01 deco-dots-pagesphilosophy-01"></span>
                      <span className="deco-dot twinkle-01 deco-dot-pagesphilosophy-01 bg-blue"></span>
                      <span className="deco-dot twinkle-03 deco-dot-pagesphilosophy-02 bg-orange"></span>
                    </section>
                    <section
                      className="pages-section pagesmessage"
                      id="pagesmessage"
                    >
                      <h2 className="pages-sechead">
                        <strong className="pages-sechead-en font-en font-border-blue animation animation-title">
                          Message
                        </strong>
                        <span className="pages-sechead-jp animation">
                          代表メッセージ
                        </span>
                      </h2>
                      <div className="pagesmessage-block animation">
                        <div className="pagesmessage-image">
                          <img
                            src="/img/common/img_person_02.webp"
                            alt="代表取締役　松本 悠吾"
                            width={300}
                            height={400}
                          />
                        </div>
                        <div className="pagesmessage-body">
                          <p className="section-lead animation animation-title">
                            どんな過去からでも、
                            <br />
                            <span className="fc-blue">
                              新しい選択肢をここから。
                            </span>
                          </p>
                          <p className="section-text animation">
                            私がこの業界に入ったとき、研修も資格サポートもありませんでした。
                            <br />
                            現場に放り込まれ、独学で資格を取り、必死に食らいついてエンジニアになりました。
                            <br />
                            <br />
                            <b>
                              苦労を重ねたからこそ、未経験の不安も、道を切り拓く楽しさも誰より理解しています。
                            </b>
                            <br />
                            <br />
                            だからこそ、学びと伴走が揃った場所をつくりたかった。
                            <br />
                            挑戦するたびに可能性が広がる会社でありたい。
                            <br />
                            その想いから、故郷の福岡・博多で当社を立ち上げました。
                            <br />
                            <br />
                            <b>
                              「自分と同じような境遇の方を支えたい」——それが博多テクノの原点です。
                            </b>
                            <br />
                            <br />
                            どんなキャリアからでも、IT業界で再スタートを切ることができる環境を、私たちは準備しています。
                            <br />
                            博多のあたたかいコミュニティの中で、あなたの挑戦を全力で応援します。
                            <br />
                            ここから、新しいキャリアを始めませんか。
                          </p>
                          <div className="pagesmessage-sign animation">
                            <small>
                              株式会社博多テクノ
                              <br />
                              代表取締役
                            </small>
                            <b>松本 悠吾</b>
                          </div>
                        </div>
                      </div>
                      <span className="deco-dots-02 floating-dots-01 deco-dots-pagesmessage-01"></span>
                      <span className="deco-dot twinkle-05 deco-dot-pagesmessage-01 bg-blue"></span>
                    </section>
                    <section
                      className="pages-section pagescompany"
                      id="pagescompany"
                    >
                      <h2 className="pages-sechead">
                        <strong className="pages-sechead-en font-en font-border-blue animation animation-title">
                          Company
                        </strong>
                        <span className="pages-sechead-jp animation">
                          会社概要
                        </span>
                      </h2>
                      <div className="pagescompany-table animation">
                        {COMPANY_TABLE.map((row) => (
                          <dl key={row.dt}>
                            <dt>{row.dt}</dt>
                            <dd>{row.dd}</dd>
                          </dl>
                        ))}
                      </div>
                      <div className="pagescompany-map animation">
                        <iframe
                          src="https://www.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E5%B8%82%E5%8D%9A%E5%A4%9A%E5%8C%BA%E5%8D%9A%E5%A4%9A%E9%A7%85%E5%89%8D1%E4%B8%81%E7%9B%AE23-2&output=embed"
                          width={600}
                          height={450}
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                      </div>
                      <span className="deco-shape-06 deco-shape-pagescompany-01"></span>
                      <span className="deco-dot twinkle-01 deco-dot-pagescompany-01 bg-yellow"></span>
                    </section>
                  </div>
                </div>
                <span className="deco-geometry-01 deco-geometry-pages-01 animation animation-slide-leftangle"></span>
                <span className="deco-geometry-02 deco-geometry-pages-02 animation animation-slide-rightangle"></span>
                <span className="deco-dots-03 floating-dots-02 deco-dots-pages-02"></span>
              </div>
            </div>
          </div>
          <SectionMessage />
        </div>
      </main>
      <Footer />
    </>
  );
}
