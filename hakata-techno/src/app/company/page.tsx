/* eslint-disable @next/next/no-img-element */
// 会社概要の独立ページ。/profile 内の Company セクションを単独ページ化したもの。
import type { Metadata } from "next";
import Header from "@/components/Header";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionMessage from "@/components/SectionMessage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社博多テクノ",
  description:
    "株式会社博多テクノの会社概要。所在地・事業内容・アクセスをご紹介します。",
};

const COMPANY_TABLE = [
  { dt: "会社名", dd: <>株式会社博多テクノ</> },
  { dt: "代表名", dd: <>代表取締役　松本 悠吾</> },
  { dt: "事業内容", dd: <>エンジニア派遣事業（SES事業）</> },
  {
    dt: "メールアドレス",
    dd: <a href="mailto:contact@hakata-techno.tech">contact@hakata-techno.tech</a>,
  },
];

const OFFICES = [
  {
    name: "福岡本社",
    address: "〒812-0011 福岡県福岡市博多区博多駅前1丁目23番2号 ParkFront博多駅前1丁目 5F-B",
    access: "JR「博多駅」博多口より徒歩3分",
    mapSrc:
      "https://www.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E5%B8%82%E5%8D%9A%E5%A4%9A%E5%8C%BA%E5%8D%9A%E5%A4%9A%E9%A7%85%E5%89%8D1%E4%B8%81%E7%9B%AE23-2&output=embed",
  },
  {
    name: "東京本社",
    address: "〒160-0023 東京都新宿区西新宿6-5-1",
    access: "西新宿駅より徒歩3分",
    mapSrc:
      "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E8%A5%BF%E6%96%B0%E5%AE%BF6-5-1&output=embed",
  },
];

export default function CompanyPage() {
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
                    Company
                  </strong>
                  <span className="pages-head-title-jp">会社概要</span>
                </h1>
                <div className="pages-head-image floating-pages-head">
                  <img
                    src="/img/index/kv_img_07.webp"
                    alt="建物イラスト"
                    width={298}
                    height={288}
                  />
                </div>
              </div>
            </div>
            <div className="pages-body">
              <div className="inner">
                <section
                  className="pages-section pagescompany"
                  id="pagescompany"
                >
                  <div className="pagescompany-table animation">
                    {COMPANY_TABLE.map((row) => (
                      <dl key={row.dt}>
                        <dt>{row.dt}</dt>
                        <dd>{row.dd}</dd>
                      </dl>
                    ))}
                  </div>
                  <div className="pagescompany-offices">
                    {OFFICES.map((office) => (
                      <div className="pagescompany-office animation" key={office.name}>
                        <h3 className="pagescompany-office-title">{office.name}</h3>
                        <div className="pagescompany-office-info">
                          <dl className="pagescompany-office-address">
                            <dt>住所</dt>
                            <dd>{office.address}</dd>
                          </dl>
                          {office.access && (
                            <dl>
                              <dt>アクセス</dt>
                              <dd>{office.access}</dd>
                            </dl>
                          )}
                        </div>
                        <div className="pagescompany-map">
                          <iframe
                            src={office.mapSrc}
                            width={600}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                          ></iframe>
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="deco-shape-06 deco-shape-pagescompany-01"></span>
                  <span className="deco-dot twinkle-01 deco-dot-pagescompany-01 bg-yellow"></span>
                </section>
              </div>
              <span className="deco-geometry-01 deco-geometry-pages-01 animation animation-slide-leftangle"></span>
            </div>
          </div>
          <SectionMessage />
        </div>
      </main>
      <Footer />
    </>
  );
}
