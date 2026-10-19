import { ArrowUpRight, Mail, MapPin } from "./Icons.jsx";
import { shopInfo } from "../data.js";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-wordmark" aria-label="纸间次元">
            <span className="footer-stamp" aria-hidden="true">紙</span>
            <span>
              <strong>纸间次元</strong>
              <small>PAPER DIMENSION</small>
            </span>
          </div>
          <p>把喜欢的世界，装订成册。<br />也把每一次相遇，好好保存。</p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">逛一逛</p>
          <a href="./index.html#about">关于书店</a>
          <a href="./index.html#shelf">编辑选书</a>
          <a href="./prices.html">价格表</a>
          <a href="./prices.html#membership">会员方案</a>
        </div>

        <div className="footer-column footer-contact">
          <p className="footer-heading">找到我们</p>
          <p><MapPin size={15} />{shopInfo.address}</p>
          <p>周二 — 周日 / 12:00 — 21:00</p>
          <p>周一闭店整理</p>
          <a href={`mailto:${shopInfo.email}`}><Mail size={15} />{shopInfo.email}</a>
        </div>

        <div className="footer-note-card">
          <span className="footer-note-label">BOOKSELLER'S NOTE</span>
          <p>“先翻开，再决定要不要喜欢。”</p>
          <a href="./index.html#visit">
            到店里来
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 纸间次元 · 独立二次元书店</span>
        <span className="footer-motto">物語は、ここから。</span>
        <a href="#top">回到顶部 ↑</a>
      </div>
    </footer>
  );
}
