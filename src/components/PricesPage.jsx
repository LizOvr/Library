import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import {
  books,
  categories,
  faqs,
  membershipPlans,
  services,
} from "../data.js";
import { prefersReducedMotion, useReveal } from "../lib/motion.js";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Spark,
} from "./Icons.jsx";

function PlanCard({ plan, billing }) {
  const isFree = plan.id === "paper-friend";
  const price = billing === "month" ? plan.monthly : plan.yearly;
  const suffix = isFree ? "永久" : billing === "month" ? "/ 月" : "/ 年";
  const monthlyEquivalent = billing === "year" && price > 0 ? Math.round(price / 12) : null;

  return (
    <article className={"plan-card" + (plan.featured ? " plan-card--featured" : "")}>
      {plan.featured && (
        <span className="plan-ribbon">
          <Spark size={12} />
          最多人选择
        </span>
      )}

      <div className="plan-topline">
        <span>{plan.en}</span>
        <span>{isFree ? "FREE" : billing === "month" ? "MONTHLY" : "YEARLY"}</span>
      </div>

      <h3>{plan.name}</h3>
      <p className="plan-description">{plan.description}</p>

      <div className="plan-price">
        <span className="plan-currency">¥</span>
        <strong>{price}</strong>
        <small>{suffix}</small>
      </div>
      <p className="plan-equivalent">
        {monthlyEquivalent ? `折合 ¥${monthlyEquivalent} / 月` : isFree ? "没有门槛，随时加入" : "随时可以取消"}
      </p>

      <ul className="plan-perks">
        {plan.perks.map((perk) => (
          <li key={perk}>
            <span className="perk-dot" />
            {perk}
          </li>
        ))}
      </ul>

      <a
        className={"plan-cta" + (plan.featured ? " plan-cta--solid" : "")}
        href={`mailto:hello@paperdimension.cn?subject=${encodeURIComponent(`想加入「${plan.name}」`)}`}
      >
        加入计划
        <ArrowUpRight size={16} />
      </a>
    </article>
  );
}

export default function PricesPage() {
  const rootRef = useReveal();
  const rowsRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("全部");
  const [billing, setBilling] = useState("year");

  const filteredBooks =
    activeCategory === "全部"
      ? books
      : books.filter((book) => book.category === activeCategory);

  useEffect(() => {
    const rows = rowsRef.current?.querySelectorAll("tr");
    if (!rows?.length || prefersReducedMotion()) return;
    animate(rows, {
      opacity: [0, 1],
      translateX: [-10, 0],
      delay: stagger(38),
      duration: 420,
      ease: "outQuad",
    });
  }, [activeCategory]);

  return (
    <div className="site site--prices" ref={rootRef}>
      <SiteHeader current="prices" />

      <main>
        <section className="price-hero" aria-labelledby="prices-title">
          <div className="page-width price-hero-grid">
            <div className="price-hero-copy">
              <p className="eyebrow hero-eyebrow" data-reveal>
                <span className="eyebrow-dot" />
                BOOKS &amp; MEMBERSHIP
                <span className="eyebrow-year">2026 AUTUMN</span>
              </p>

              <h1 className="price-title" id="prices-title">
                <span className="title-mask">
                  <span
                    data-reveal
                    data-reveal-y="110%"
                    data-reveal-to="0%"
                    data-reveal-delay="60"
                    data-reveal-duration="900"
                  >
                    价格表
                  </span>
                </span>
              </h1>

              <p className="price-lead" data-reveal data-reveal-delay="230">
                明码标价，也明码标价地喜欢故事。
                一本书的价格写在下面，至于它陪你多久，我们不负责计算。
              </p>

              <div className="price-hero-actions" data-reveal data-reveal-delay="330">
                <a className="button button--ink" href="#price-list">
                  查看本季价目
                  <ArrowDown size={17} />
                </a>
                <a className="button button--line" href="#membership">
                  会员方案
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <p className="price-hero-note" data-reveal data-reveal-delay="420">
                <span>所有价格均为人民币含税价</span>
                <span>会员折扣见下表</span>
              </p>
            </div>

            <div className="receipt-shell" data-reveal data-reveal-delay="280">
              <aside className="receipt" aria-label="价目摘要小票">
                <div className="receipt-head">
                  <div>
                    <span className="receipt-brand">紙間次元</span>
                    <small>PAPER DIMENSION</small>
                  </div>
                  <span className="receipt-number">NO. 2026-07</span>
                </div>
                <p className="receipt-kicker">BOOKSELLER'S RECEIPT</p>
                <div className="receipt-rule" />
                <div className="receipt-row">
                  <span>平装单行本</span>
                  <span>¥42 — 58</span>
                </div>
                <div className="receipt-row">
                  <span>精装爱藏版</span>
                  <span>¥76 — 98</span>
                </div>
                <div className="receipt-row">
                  <span>限定特装版</span>
                  <span>¥108 — 148</span>
                </div>
                <div className="receipt-row">
                  <span>月读会员</span>
                  <span>¥299 / 年</span>
                </div>
                <div className="receipt-rule" />
                <div className="receipt-total">
                  <span>把喜欢带回家</span>
                  <strong>值得</strong>
                </div>
                <p className="receipt-foot">
                  所有价格含税 · 明码标价 · 不设隐形消费
                  <br />
                  感谢你为一本纸书停留。
                </p>
                <div className="barcode" aria-hidden="true" />
                <span className="receipt-stamp" aria-hidden="true">企划中</span>
              </aside>
            </div>
          </div>
        </section>

        <section className="price-list-section" id="price-list" aria-labelledby="price-list-title">
          <div className="page-width">
            <div className="price-section-head">
              <div>
                <div className="section-rail" data-reveal>
                  <span>01 / BOOK PRICE LIST</span>
                  <span>本季书目</span>
                </div>
                <h2 className="display-title" id="price-list-title" data-reveal>
                  每一本，都有它的<em>价签</em>。
                </h2>
              </div>
              <p className="price-section-copy" data-reveal>
                平装适合随身携带，精装适合放在书架最顺手的位置，
                限定版适合那个“就是现在”的瞬间。
              </p>
            </div>

            <div className="price-toolbar" data-reveal>
              <div className="filter-group" role="group" aria-label="按书籍类型筛选">
                {categories.map((category) => (
                  <button
                    className={"filter-button" + (activeCategory === category ? " is-active" : "")}
                    type="button"
                    key={category}
                    aria-pressed={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <p className="price-count">
                显示 <strong>{filteredBooks.length}</strong> / {books.length} 本
              </p>
            </div>

            <div className="price-table-wrap" data-reveal>
              <table className="price-table">
                <caption className="sr-only">纸间次元本季书目价格表</caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">书目</th>
                    <th scope="col">分类</th>
                    <th scope="col">平装</th>
                    <th scope="col">精装</th>
                    <th scope="col">限定</th>
                    <th scope="col">会员价</th>
                  </tr>
                </thead>
                <tbody ref={rowsRef}>
                  {filteredBooks.map((book, index) => (
                    <tr key={book.id}>
                      <td className="cell-index">{String(index + 1).padStart(2, "0")}</td>
                      <td className="cell-book">
                        <span className="price-swatch" data-theme={book.theme} aria-hidden="true" />
                        <span className="cell-book-copy">
                          <strong>{book.title}</strong>
                          <small>
                            {book.author} 著 · {book.genre}
                            <span className="cell-book-category"> · {book.category}</span>
                          </small>
                        </span>
                      </td>
                      <td className="cell-category"><span className="category-chip">{book.category}</span></td>
                      <td className="cell-price" data-label="平装">¥{book.price.paper}</td>
                      <td className="cell-price" data-label="精装">¥{book.price.hard}</td>
                      <td className="cell-price cell-price--limited" data-label="限定">¥{book.price.limited}</td>
                      <td className="cell-member" data-label="会员价">
                        <strong>¥{Math.round(book.price.paper * 0.9)}</strong>
                        <small>月读价</small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="price-footnote" data-reveal>
              会员价按「月读会员」全场 9 折计算，仅展示平装价格。
              精装、限定版及特装商品以店内实际标价为准；限定版每人限购 2 册。
            </p>
          </div>
        </section>

        <section className="membership-section" id="membership" aria-labelledby="membership-title">
          <div className="page-width">
            <div className="membership-head">
              <div>
                <div className="section-rail section-rail--light" data-reveal>
                  <span>02 / MEMBERSHIP</span>
                  <span>会员方案</span>
                </div>
                <h2 className="display-title" id="membership-title" data-reveal>
                  把喜欢，<br />变成<em>习惯</em>。
                </h2>
              </div>

              <div className="membership-aside" data-reveal>
                <p>
                  不办卡也能买书。会员只是给常来的人，多留一盏灯、一个位置，
                  和一点点不讲道理的折扣。
                </p>
                <div className="billing-toggle" role="group" aria-label="会员计费周期">
                  <button
                    type="button"
                    className={billing === "month" ? "is-active" : ""}
                    aria-pressed={billing === "month"}
                    onClick={() => setBilling("month")}
                  >
                    按月
                  </button>
                  <button
                    type="button"
                    className={billing === "year" ? "is-active" : ""}
                    aria-pressed={billing === "year"}
                    onClick={() => setBilling("year")}
                  >
                    按年
                    <span>更划算</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="plans-grid">
              {membershipPlans.map((plan) => (
                <PlanCard plan={plan} billing={billing} key={plan.id} />
              ))}
            </div>

            <p className="membership-footnote" data-reveal>
              会员折扣与店内满赠可同享，不与其他折扣码叠加。年付会员自激活日起 12 个月内有效。
            </p>
          </div>
        </section>

        <section className="extras-section" id="extras" aria-labelledby="extras-title">
          <div className="page-width extras-grid">
            <div className="extras-intro">
              <div className="section-rail" data-reveal>
                <span>03 / EXTRAS</span>
                <span>加购服务</span>
              </div>
              <h2 className="display-title" id="extras-title" data-reveal>
                让一本书，<br />更像一份<em>礼物</em>。
              </h2>
              <p data-reveal>
                可以只买书，也可以多花一点点心思。
                所有服务都可以在结账时直接加购，不需要提前预约。
              </p>
              <div className="extras-stamp" aria-hidden="true">
                <span>WRAP</span>
                <strong>包</strong>
                <span>IT</span>
              </div>
            </div>

            <div className="extras-list">
              {services.map((service, index) => (
                <div className="extra-item" key={service.name} data-reveal data-reveal-delay={index * 45}>
                  <span className="extra-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="extra-copy">
                    <h3>{service.name}</h3>
                    <p>{service.detail}</p>
                  </div>
                  <strong>{service.price}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="page-width faq-grid">
            <div className="faq-intro">
              <div className="section-rail" data-reveal>
                <span>04 / FAQ</span>
                <span>常见问题</span>
              </div>
              <h2 className="display-title" id="faq-title" data-reveal>
                再问一句，<br />也没关系。
              </h2>
              <p data-reveal>
                价格之外的事，也可以问。买不买都没关系，我们喜欢问题比喜欢订单多一点。
              </p>
              <a className="text-link" href="mailto:hello@paperdimension.cn" data-reveal>
                <Mail size={16} />
                写信问我们
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.q} data-reveal data-reveal-delay={index * 60}>
                  <summary>
                    <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="faq-question">{faq.q}</span>
                    <span className="faq-mark" aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="price-cta">
          <div className="page-width price-cta-inner" data-reveal>
            <p className="price-cta-kicker">PRICE IS CLEAR. LOVE IS NOT.</p>
            <h2>价格写在这里，<br />喜欢不用。</h2>
            <div className="price-cta-actions">
              <a className="button button--paper" href="./index.html#visit">
                来店里看看
                <ArrowUpRight size={17} />
              </a>
              <a className="price-cta-link" href="./index.html">
                回到书店主页
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
