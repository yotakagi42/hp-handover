/* eslint-disable @next/next/no-img-element */
// 参考デザインの採用ページのDOM構造を踏襲したページ。
// クラス名はスタイル定義のCSSセレクタと対応しているため変更しないこと。
import type { Metadata } from "next";
import Header from "@/components/Header";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionMessage from "@/components/SectionMessage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "採用情報 | 株式会社博多テクノ",
  description:
    "株式会社博多テクノの採用情報。採用フロー・福利厚生をご紹介します。",
};

export default function RecruitPage() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main className="bodywrapper">
        <div className="wrapper">
          <div className="pages pagesrecruitment">
            <div className="pages-head">
              <div className="inner">
                <h1 className="pages-head-title animation-title">
                  <strong className="pages-head-title-en font-en font-border-blue">
                    Recruitment
                  </strong>
                  <span className="pages-head-title-jp">採用情報</span>
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
              <section className="pages-section pagesflow" id="pagesflow">
                <div className="inner">
                  <h2 className="pages-sechead text-center">
                    <strong className="pages-sechead-en font-en font-border-blue animation animation-title">
                      Flow
                    </strong>
                    <span className="pages-sechead-jp animation">採用フロー</span>
                  </h2>
                  <p className="section-text text-center animation">
                    エントリーから入社までの流れをご紹介します。
                  </p>
                  <ul className="pagesflow-list">
                    <li className="animation">
                      <div className="pagesflow-list-image">
                        <img
                          src="/img/pages/img_flow_01.svg"
                          alt="エントリー"
                          width={314}
                          height={275}
                        />
                      </div>
                      <h3 className="pagesflow-list-title">
                        <span className="font-en">STEP1</span>
                        <b>エントリー</b>
                      </h3>
                      <ul className="pagesflow-list-points">
                        <li>エントリーフォームからご応募</li>
                        <li>履歴書・職務経歴書のご準備（未経験の方も歓迎）</li>
                        <li>ご希望の条件（年収／職種／勤務地 etc）</li>
                        <li>ご希望の働き方</li>
                      </ul>
                    </li>
                    <li className="animation">
                      <div className="pagesflow-list-image">
                        <img
                          src="/img/pages/img_flow_02.svg"
                          alt="カジュアル面談"
                          width={63}
                          height={55}
                        />
                      </div>
                      <h3 className="pagesflow-list-title">
                        <span className="font-en">STEP2</span>
                        <b>カジュアル面談</b>
                      </h3>
                      <ul className="pagesflow-list-points">
                        <li>オンラインにて、会社の文化やビジョンをご紹介</li>
                      </ul>
                      <p className="pagesflow-list-note">
                        ※選考要素はありません。質問だけでも歓迎です
                      </p>
                    </li>
                    <li className="animation">
                      <div className="pagesflow-list-image">
                        <img
                          src="/img/pages/img_flow_03.svg"
                          alt="技術面接・最終面接"
                          width={314}
                          height={275}
                        />
                      </div>
                      <h3 className="pagesflow-list-title">
                        <span className="font-en">STEP3</span>
                        <b>技術面接・最終面接</b>
                      </h3>
                      <ul className="pagesflow-list-points">
                        <li>現場エンジニア・役員との面接を実施</li>
                      </ul>
                      <p className="pagesflow-list-note">
                        ※オンライン実施可。結果は1週間以内にご連絡します
                      </p>
                    </li>
                    <li className="animation">
                      <div className="pagesflow-list-image">
                        <img
                          src="/img/pages/img_flow_04.svg"
                          alt="内定・入社"
                          width={314}
                          height={275}
                        />
                      </div>
                      <h3 className="pagesflow-list-title">
                        <span className="font-en">STEP4</span>
                        <b>内定・入社</b>
                      </h3>
                      <ul className="pagesflow-list-points">
                        <li>
                          条件（年収／配属／働き方）をご提示し、ご納得いただいた上で入社日を決定します
                        </li>
                      </ul>
                      <p className="pagesflow-list-note">
                        ※ご入社後もメンターが伴走し、キャリアチェンジの不安を解消します
                      </p>
                    </li>
                  </ul>
                </div>
                <span className="deco-shape-04 deco-shape-pagesflow-01"></span>
                <span className="deco-dots-04 floating-dots-02 deco-dots-pagesflow-01"></span>
                <span className="deco-dot twinkle-01 deco-dot-pagesflow-01 bg-orange"></span>
              </section>
              <section
                className="pages-section pagesbenefit bg-pages-gray"
                id="pagesbenefit"
              >
                <div className="inner">
                  <div className="pagesbenefit-head">
                    <h2 className="pages-sechead">
                      <strong className="pages-sechead-en font-en font-border-blue animation animation-title">
                        Benefit
                      </strong>
                      <span className="pages-sechead-jp animation">福利厚生</span>
                    </h2>
                    <div className="pagesbenefit-head-image floating-pages-head">
                      <img
                        src="/img/index/kv_img_11.webp"
                        alt="人物イラスト"
                        width={101}
                        height={224}
                      />
                    </div>
                  </div>
                  <p className="section-text animation">
                    博多テクノの福利厚生は、エンジニアの成長と働きやすさを重視しています。
                    <br />
                    今後も社員の声を聞きながら、福岡で一番「人が輝く」会社を目指していきます。
                  </p>
                  <ul className="pagesbenefit-list">
                    <li className="animation">
                      <div className="pagesbenefit-list-head">
                        <div className="pagesbenefit-list-icon">
                          <span className="icon-pagesbenefit-01 bg-blue"></span>
                        </div>
                        <h3 className="pagesbenefit-list-title">法定福利厚生</h3>
                      </div>
                      <p className="section-text">
                        社会保険完備（雇用・労災・健康・厚生年金）
                      </p>
                    </li>
                    <li className="animation">
                      <div className="pagesbenefit-list-head">
                        <div className="pagesbenefit-list-icon">
                          <span className="icon-pagesbenefit-02 bg-orange"></span>
                        </div>
                        <h3 className="pagesbenefit-list-title">各種手当</h3>
                      </div>
                      <p className="section-text">
                        交通費全額支給
                        <br />
                        時間外手当（超過分全額支給）／ 出張手当 ／
                        リモートワーク手当
                      </p>
                    </li>
                    <li className="animation">
                      <div className="pagesbenefit-list-head">
                        <div className="pagesbenefit-list-icon">
                          <span className="icon-pagesbenefit-03 bg-yellow"></span>
                        </div>
                        <h3 className="pagesbenefit-list-title">働き方</h3>
                      </div>
                      <p className="section-text">
                        フルリモートOK ／ コアタイムなしのフレックス制
                        <br />
                        副業OK ／ 独立支援制度 ／ 資格支援制度
                      </p>
                    </li>
                    <li className="animation">
                      <div className="pagesbenefit-list-head">
                        <div className="pagesbenefit-list-icon">
                          <span className="icon-pagesbenefit-04 bg-blue"></span>
                        </div>
                        <h3 className="pagesbenefit-list-title">休暇制度</h3>
                      </div>
                      <p className="section-text">
                        年間休日125日 ／ 完全週休2日制（土日休み）／ GW休暇
                        <br />
                        夏季休暇 ／ 年末年始休暇 ／ 産休育休 ／
                        有給・介護・慶弔休暇
                      </p>
                    </li>
                    <li className="is-wide animation">
                      <div className="pagesbenefit-list-head">
                        <div className="pagesbenefit-list-icon">
                          <span className="icon-pagesbenefit-05 bg-orange"></span>
                        </div>
                        <h3 className="pagesbenefit-list-title">
                          博多テクノ独自の福利厚生
                        </h3>
                      </div>
                      <p className="section-text">
                        学習支援予算（年間100万円まで全員に付与）／
                        資格取得報奨金（AWS・Azure・GCP認定で最大10万円）／
                        Udemy無料受講 ／ AWS学習環境提供 ／
                        書籍購入手当（IT関連書籍が年2万円分まで社費購入可能）／
                        メンター手当（後輩の伴走で5,000円／月）／
                        リファラル手当（20万円／人）／
                        勤続手当（勤続5年で30万円、勤続10年で100万円）／
                        誕生月休暇 ／ ファミリーホリデー休暇 ／
                        四半期リフレッシュ休暇 ／
                        部活動補助（屋台部・サウナ部・もつ鍋部など 3,000円／月）／
                        トレーニング補助（ジム・ヨガ等の利用料を4,000円／月まで半額補助）／
                        帰省手当（年1回の帰省交通費を半額補助）／
                        引越し手当（オフィス2km圏内なら家賃補助2万円／月）／
                        交流会随時開催（もつ鍋会・水炊き会）
                      </p>
                    </li>
                  </ul>
                </div>
                <span className="deco-shape-03 deco-shape-pagesbenefit-01"></span>
                <span className="deco-dots-02 floating-dots-01 deco-dots-pagesbenefit-01"></span>
                <span className="deco-dot twinkle-03 deco-dot-pagesbenefit-01 bg-blue"></span>
                <span className="deco-dot twinkle-05 deco-dot-pagesbenefit-02 bg-orange"></span>
              </section>
            </div>
            <span className="deco-geometry-01 deco-geometry-pages-01 animation animation-slide-leftangle"></span>
          </div>
          <SectionMessage />
        </div>
      </main>
      <Footer />
    </>
  );
}
