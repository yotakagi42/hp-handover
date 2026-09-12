/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-nav">
          <div className="footer-nav-wrapper">
            <div className="footer-nav-block">
              <p className="footer-nav-block-parent">
                <a href="/profile">企業情報</a>
              </p>
              <ul className="footer-nav-block-list">
                <li>
                  <a href="/profile#pagesphilosophy">企業理念</a>
                </li>
                <li>
                  <a href="/profile#pagesmessage">代表メッセージ</a>
                </li>
                <li>
                  <a href="/company">会社概要</a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-block">
              <p className="footer-nav-block-parent">
                <a href="/recruit">採用情報</a>
              </p>
              <ul className="footer-nav-block-list">
                <li>
                  <a href="/recruit#pagesflow">採用フロー</a>
                </li>
                <li>
                  <a href="/recruit#pagesbenefit">福利厚生</a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-block">
              <p className="footer-nav-block-parent">
                <a href="mailto:contact@hakata-techno.tech">
                  お問い合わせ（メール）
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <a className="footer-logo" href="/">
            <img
              src="/img/common/logo-hakata.svg"
              alt="博多テクノ"
              width={317}
              height={63}
            />
          </a>
          <div className="footer-btn">
            <a href="/recruit" className="btn btn-white">
              <span className="btn-text">採用情報について</span>
              <span className="btn-arrowblock">
                <span className="icon-arrow-right"></span>
              </span>
            </a>
          </div>
          <p className="footer-copy">&copy; HAKATA TECHNO All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
