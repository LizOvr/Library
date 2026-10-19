import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Spark } from "./Icons.jsx";

const tickerItems = [
  "新刊入荷",
  "限定版预订中",
  "会员日 10.20",
  "上海 · 安福路 32 号",
  "本周三上新",
  "营业至 21:00",
];

function TickerGroup() {
  return (
    <span className="ticker-group">
      {tickerItems.map((item) => (
        <span className="ticker-item" key={item}>
          <span>{item}</span>
          <Spark size={11} />
        </span>
      ))}
    </span>
  );
}

export default function SiteHeader({ current = "home" }) {
  const [open, setOpen] = useState(false);
  const isPrices = current === "prices";
  const homeHref = "./index.html";
  const pricesHref = "./prices.html";

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="site-top" id="top">
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <TickerGroup />
          <TickerGroup />
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href={homeHref} aria-label="纸间次元书店主页">
            <span className="brand-mark" aria-hidden="true">紙</span>
            <span className="brand-text">
              <strong>纸间次元</strong>
              <small>PAPER DIMENSION</small>
            </span>
          </a>

          <nav
            id="main-navigation"
            className={"site-nav" + (open ? " is-open" : "")}
            aria-label="主导航"
          >
            <a
              className="site-nav-link"
              href={`${homeHref}#about`}
              onClick={() => setOpen(false)}
            >
              <span className="nav-index">01</span>
              关于书店
            </a>
            <a
              className="site-nav-link"
              href={`${homeHref}#shelf`}
              onClick={() => setOpen(false)}
            >
              <span className="nav-index">02</span>
              编辑选书
            </a>
            <a
              className={"site-nav-link" + (isPrices ? " is-active" : "")}
              href={pricesHref}
              aria-current={isPrices ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="nav-index">03</span>
              价格表
            </a>
            <a
              className="site-nav-link site-nav-link--soft"
              href={`${homeHref}#visit`}
              onClick={() => setOpen(false)}
            >
              <span className="nav-index">04</span>
              到店指南
            </a>
            <a className="mobile-nav-cta" href={pricesHref} onClick={() => setOpen(false)}>
              查看价格表
              <ArrowUpRight size={17} />
            </a>
          </nav>

          <a
            className="header-cta"
            href={isPrices ? "#membership" : `${pricesHref}#membership`}
          >
            {isPrices ? "会员方案" : "查看价格"}
            <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            onClick={() => setOpen((value) => !value)}
          >
            <Menu open={open} />
          </button>
        </div>
      </header>
    </div>
  );
}
