# 纸间次元 · 二次元书店

一个只有两个页面的静态二次元书店前端：

- `index.html` — 书店主页：品牌介绍、编辑选书、到店指南
- `prices.html` — 价格表：本季书目、会员方案、加购服务、常见问题

## 技术栈

项目严格沿用 `D:\gitcode\zero` 中出现的技术与版本：

- React `19.3.1` + React DOM `19.3.1`
- Vite `8.3.4` + `@vitejs/plugin-react` `6.1.2`
- anime.js `4.5.0`（入场与筛选动画）
- 原生 CSS、内联 SVG

没有使用 React Router、UI 组件库、CSS 框架或外部图片资源。两个页面由 Vite 的多 HTML 入口生成，是真正的静态页面。

## 本地运行

```bash
npm install
npm run dev
```

打开终端输出中的本地地址。

## 构建与预览

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`，可以直接部署到任意静态服务器。由于使用 ES Module，请不要通过双击 HTML 文件的方式打开；需要经由 HTTP 服务访问。

Vite 的 `base` 已配置为 `"./"`，可作为子目录静态站点部署。

## 页面交互

- 主页与价格表之间使用普通的 HTML 链接跳转，无客户端路由依赖。
- 价格表支持按「漫画 / 轻小说 / 画集 / 设定集」筛选，并使用 anime.js 做行级过渡。
- 会员方案支持「按月 / 按年」切换，价格即时更新。
- 移动端提供可展开的导航菜单。
- 动画会遵从系统的 `prefers-reduced-motion` 设置。

## 目录结构

```text
book/
├─ index.html
├─ prices.html
├─ public/favicon.svg
├─ src/
│  ├─ home.jsx              # 主页入口
│  ├─ prices.jsx            # 价格表入口
│  ├─ data.js               # 书目、会员、服务与问答数据
│  ├─ components/
│  │  ├─ HomePage.jsx
│  │  ├─ PricesPage.jsx
│  │  ├─ BookCover.jsx
│  │  ├─ CoverArt.jsx       # 六套原创 SVG 封面插画
│  │  ├─ SiteHeader.jsx
│  │  ├─ SiteFooter.jsx
│  │  └─ Icons.jsx
│  ├─ lib/motion.js         # anime.js 入场观察器
│  └─ css/                  # 设计变量、版式、封面与响应式样式
└─ vite.config.js
```

## 内容说明

书店名称「纸间次元」、书目、作者、会员方案和联系方式均为演示内容；所有封面均为 CSS + SVG 原创绘制，不依赖外部图片。
