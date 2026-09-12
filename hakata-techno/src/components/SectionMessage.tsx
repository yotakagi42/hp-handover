/* eslint-disable @next/next/no-img-element */
// 全ページ下部で共通の sectionmessage(メッセージ+採用情報リンクカード)。元テーマの共通パーツに対応。
export default function SectionMessage() {
  return (
    <section className="sectionmessage">
      <div className="inner">
        <div className="sectionmessage-block">
          <div className="section-title-wrapper animation">
            <h2 className="section-title sectionmessage-block-title">
              あなたの可能性が、
              <br />
              空へ広がる場所。
            </h2>
            <div className="section-titleline section-titleline-blue">
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
          </div>
          <p className="section-text animation">
            博多テクノは、福岡・博多から最先端のクラウド技術に挑戦するエンジニア集団です。「今のスキルのままでは不安」「もっと成長できる環境で働きたい」——そんな想いに、学びと伴走で応えます。
            <br />
            <br />
            ここで手に入るのは、技術力だけではありません。刺激し合い高め合える仲間、挑戦を全力で後押しする文化、そして博多のあたたかいコミュニティ。まずは小さな一歩から、一緒に始めてみませんか？
          </p>
          <div className="sectionmessage-block-image animation">
            <img
              src="/img/common/img_person_04.webp"
              alt="イメージイラスト"
              width={166}
              height={258}
            />
          </div>
        </div>
        <div className="sectionmessage-image sectionmessage-image-01 animation">
          <img
            src="/img/common/img_message.webp"
            alt="イメージ写真"
            width={428}
            height={285}
          />
        </div>
        <div className="sectionmessage-link animation">
          <a href="/recruit">
            <h3 className="sectionmessage-link-title">
              <span className="section-title-en font-border-blue">
                Recruitment News
              </span>
              <b>採用情報</b>
            </h3>
            <p className="sectionmessage-link-text">
              「挑戦したい」に寄り添う、仲間を募集中。
              <br />
              博多テクノでは、メンバー一人ひとりの挑戦と成長を何よりも大切にしています。Webエンジニア・クラウドエンジニア・SESエンジニアを募集中です。あなたのこれまでの経験を、次の『挑戦』につなげてみませんか？
            </p>
            <span className="icon-arrow-right-circle"></span>
          </a>
        </div>
      </div>
      <span className="deco-geometry-04 deco-geometry-sectionmessage-01 animation animation-slide-rightangle"></span>
    </section>
  );
}
