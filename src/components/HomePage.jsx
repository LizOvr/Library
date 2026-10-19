import { books } from "../data.js";
import { useReveal } from "../lib/motion.js";
import BookCover from "./BookCover.jsx";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Spark,
} from "./Icons.jsx";

const featuredBooks = books.slice(0, 4);

const marqueeItems = [
  "漫画 MANGA",
  "轻小说 LIGHT NOVEL",
  "画集 ART BOOK",
  "设定集 DESIGN WORKS",
  "独立出版 INDIE ZINE",
];

export default function HomePage() {
  const rootRef = useReveal();

  return (
    <div className="site site--home" ref={rootRef}>
      <SiteHeader current="home" />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow" data-reveal>
                <span className="eyebrow-dot" />
                独立二次元书店 · 上海
                <span className="eyebrow-year">EST. 2019</span>
              </p>

              <h1 className="hero-title" id="hero-title">
                <span className="title-mask">
                  <span
                    data-reveal
                    data-reveal-y="112%"
                    data-reveal-to="0%"
                    data-reveal-delay="80"
                    data-reveal-duration="920"
                  >
                    把喜欢的
                  </span>
                </span>
                <span className="title-mask">
                  <span
                    data-reveal
                    data-reveal-y="112%"
                    data-reveal-to="0%"
                    data-reveal-delay="160"
                    data-reveal-duration="920"
                  >
                    世界，
                  </span>
                </span>
                <span className="title-mask">
                  <span
                    data-reveal
                    data-reveal-y="112%"
                    data-reveal-to="0%"
                    data-reveal-delay="240"
                    data-reveal-duration="920"
                  >
                    装订成<em>册</em>。
                  </span>
                </span>
              </h1>

              <p className="hero-lead" data-reveal data-reveal-delay="300">
                纸间次元是一间只卖故事的小书店。漫画、轻小说、画集与设定集——
                我们替你把喜欢的次元，留在可以翻页的纸上。
              </p>

              <div className="hero-actions" data-reveal data-reveal-delay="390">
                <a className="button button--ink" href="#shelf">
                  翻开本季选书
                  <ArrowDown size={17} />
                </a>
                <a className="button button--line" href="./prices.html">
                  查看价格表
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="hero-meta" data-reveal data-reveal-delay="480">
                <span><strong>1200+</strong> 册在架</span>
                <span><strong>60+</strong> 独立出版社</span>
                <span><strong>每周三</strong> 新刊入荷</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <span className="visual-sun" />
              <span className="visual-orbit visual-orbit--one" />
              <span className="visual-orbit visual-orbit--two" />
              <span className="visual-label">NEW ARRIVAL / 2026 AUTUMN</span>
              <span className="visual-star">✦</span>
              <span className="visual-vertical">物語は、ここから。</span>

              <div className="cover-slot cover-slot--left">
                <div
                  className="cover-enter"
                  data-reveal
                  data-reveal-y="52px"
                  data-reveal-delay="420"
                  data-reveal-duration="950"
                >
                  <BookCover book={books[1]} />
                </div>
              </div>

              <div className="cover-slot cover-slot--center">
                <div
                  className="cover-enter"
                  data-reveal
                  data-reveal-y="64px"
                  data-reveal-delay="300"
                  data-reveal-duration="1000"
                >
                  <BookCover book={books[0]} />
                </div>
              </div>

              <div className="cover-slot cover-slot--right">
                <div
                  className="cover-enter"
                  data-reveal
                  data-reveal-y="46px"
                  data-reveal-delay="520"
                  data-reveal-duration="950"
                >
                  <BookCover book={books[3]} />
                </div>
              </div>

              <div className="hero-sticker">
                <span>本周</span>
                <strong>新刊</strong>
                <span>入荷</span>
              </div>
              <span className="hero-price">¥48 <small>起</small></span>
              <span className="visual-caption">NO. 07 / 书架正在更新</span>
            </div>
          </div>

          <div className="page-width hero-footnote">
            <a className="scroll-cue" href="#about">
              <span>往下翻</span>
              <span className="scroll-cue-line" />
            </a>
            <p>SCROLL TO READ · 继续阅读</p>
            <span className="hero-issue">ISSUE 07 — AUTUMN 2026</span>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((group) => (
              <span className="marquee-group" key={group}>
                {marqueeItems.map((item) => (
                  <span className="marquee-item" key={`${group}-${item}`}>
                    {item}
                    <Spark size={13} />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="page-width">
            <div className="section-rail section-rail--light" data-reveal>
              <span>01 / ABOUT THE SHOP</span>
              <span>关于书店</span>
            </div>

            <div className="about-grid">
              <h2 className="display-title" id="about-title" data-reveal>
                故事有<em>实体</em>的
                <br />
                温度。
              </h2>

              <div className="about-copy">
                <p data-reveal>
                  纸间次元开在安福路的一栋老房子里。没有巨大的招牌，只有一扇总被
                  风吹得轻轻响的木门，和一面墙的书。
                </p>
                <p data-reveal>
                  我们只做三件事：认真选书、好好包书、等你回来。这里不追赶排行榜，
                  但会为了一本冷门短篇，跑遍三个旧书市集。
                </p>
                <div className="about-sign" data-reveal>
                  <span>店主</span>
                  <strong>阿栞</strong>
                  <span>写于 2026 年秋</span>
                </div>
              </div>
            </div>

            <div className="about-stats" data-reveal>
              <div>
                <strong>07</strong>
                <span>年，只做一间书店</span>
              </div>
              <div>
                <strong>1200<sup>+</sup></strong>
                <span>册在架故事</span>
              </div>
              <div>
                <strong>60<sup>+</sup></strong>
                <span>独立出版社</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>次重新翻开</span>
              </div>
            </div>

            <div className="about-values">
              <article data-reveal>
                <span className="value-index">A.</span>
                <h3>不追热度，<br />只找对的。</h3>
                <p>每一本上架的书，都至少被店里的人读完一遍。</p>
              </article>
              <article data-reveal data-reveal-delay="90">
                <span className="value-index">B.</span>
                <h3>书是新的，<br />故事不是。</h3>
                <p>我们收旧书，也帮旧书找到下一个愿意翻开它的人。</p>
              </article>
              <article data-reveal data-reveal-delay="180">
                <span className="value-index">C.</span>
                <h3>慢慢来，<br />也可以。</h3>
                <p>不买也没关系。店里有椅子，坐多久都行。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="shelf-section" id="shelf" aria-labelledby="shelf-title">
          <div className="page-width">
            <div className="shelf-head">
              <div>
                <div className="section-rail" data-reveal>
                  <span>02 / CURATED SHELF</span>
                  <span>本季选书</span>
                </div>
                <h2 className="display-title" id="shelf-title" data-reveal>
                  最近被反复<br />翻开的<em>四本</em>。
                </h2>
              </div>
              <p className="shelf-intro" data-reveal>
                从月面到海边，从便利店的夜班到银河的末班车。
                这一季，我们把四段舍不得读完的故事放在最顺手的位置。
              </p>
            </div>

            <div className="book-grid">
              {featuredBooks.map((book, index) => (
                <article
                  className="book-card"
                  key={book.id}
                  data-reveal
                  data-reveal-delay={index * 80}
                >
                  <a className="book-card-cover" href="./prices.html#price-list">
                    <BookCover book={book} />
                    <span className="book-card-hover">
                      查看价格
                      <ArrowUpRight size={15} />
                    </span>
                  </a>
                  <div className="book-card-meta">
                    <span>{book.category}</span>
                    <span>¥{book.price.paper} 起</span>
                  </div>
                  <h3>{book.title}</h3>
                  <p className="book-card-author">{book.author} 著</p>
                  <p className="book-card-blurb">{book.blurb}</p>
                  <div className="book-card-foot">
                    <span className="book-tag">{book.tag}</span>
                    <a href="./prices.html#price-list" aria-label={`查看${book.title}的价格`}>
                      价目
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="shelf-footer" data-reveal>
              <p>
                还有 <strong>1200+</strong> 本，等你来翻。
                <span>书架每周三下午更新。</span>
              </p>
              <a className="button button--ink" href="./prices.html#price-list">
                查看完整价目表
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="visit-section" id="visit" aria-labelledby="visit-title">
          <div className="page-width">
            <div className="visit-card">
              <div className="visit-copy">
                <div className="section-rail section-rail--paper" data-reveal>
                  <span>03 / VISIT US</span>
                  <span>到店指南</span>
                </div>
                <h2 className="display-title" id="visit-title" data-reveal>
                  来店里，<br />翻一页。
                </h2>
                <p data-reveal>
                  周二的下午最适合来。人少，窗边的光刚好落在新书台上。
                  如果愿意，也可以带一本读旧了的书，换一杯茶。
                </p>
                <a
                  className="button button--paper"
                  href="mailto:hello@paperdimension.cn"
                  data-reveal
                >
                  写封信给我们
                  <Mail size={17} />
                </a>
              </div>

              <div className="visit-info">
                <article className="visit-info-item" data-reveal>
                  <span className="visit-icon"><MapPin size={19} /></span>
                  <div>
                    <span className="visit-label">地址 / ADDRESS</span>
                    <strong>上海市徐汇区<br />安福路 32 号 1F</strong>
                    <p>地铁 10 号线上海图书馆站 3 号口，步行 6 分钟。</p>
                  </div>
                </article>
                <article className="visit-info-item" data-reveal data-reveal-delay="90">
                  <span className="visit-icon"><Clock size={19} /></span>
                  <div>
                    <span className="visit-label">营业 / HOURS</span>
                    <strong>周二 — 周日<br />12:00 — 21:00</strong>
                    <p>每周一闭店整理。节假日照常，除非门口挂了小木牌。</p>
                  </div>
                </article>
                <div className="visit-tip" data-reveal data-reveal-delay="160">
                  <Spark size={15} />
                  <p>到店可以免费翻书、盖纪念章，也可以只来躲一场雨。</p>
                </div>
              </div>
            </div>

            <div className="visit-services">
              <article data-reveal>
                <span className="service-index">01</span>
                <h3>找一本书</h3>
                <p>告诉我们最近在找什么，店员会从书架和仓库里一起翻。</p>
                <a href="./prices.html#price-list">看看价目 <ArrowUpRight size={14} /></a>
              </article>
              <article data-reveal data-reveal-delay="80">
                <span className="service-index">02</span>
                <h3>包一本书</h3>
                <p>和纸、丝带、手写卡片。送人，或者送给自己。</p>
                <a href="./prices.html#extras">包装服务 <ArrowUpRight size={14} /></a>
              </article>
              <article data-reveal data-reveal-delay="160">
                <span className="service-index">03</span>
                <h3>留一本书</h3>
                <p>线上看到想读的，可以先和我们说一声，到店再取。</p>
                <a href="mailto:hello@paperdimension.cn">写信留书 <ArrowUpRight size={14} /></a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
