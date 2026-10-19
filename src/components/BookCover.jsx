import CoverArt from "./CoverArt.jsx";

export default function BookCover({ book, className = "" }) {
  const longTitle = book.title.length > 9;
  return (
    <div
      className={`book-cover ${className}`.trim()}
      data-theme={book.theme}
      role="img"
      aria-label={`《${book.title}》封面，${book.author}著，${book.genre}`}
    >
      <CoverArt motif={book.motif} />
      <span className="cover-grain" aria-hidden="true" />
      <div className="cover-top" aria-hidden="true">
        <span>紙間次元</span>
        <span>PD / {book.vol}</span>
      </div>
      <div className="cover-copy" aria-hidden="true">
        <p className="cover-kicker">{book.genre}</p>
        <h3 className={`cover-title${longTitle ? " is-long" : ""}`}>{book.title}</h3>
        <p className="cover-jp">{book.jp}</p>
      </div>
      <div className="cover-bottom" aria-hidden="true">
        <span>{book.author} 著</span>
        <span>¥{book.price.paper}</span>
      </div>
      <span className="cover-spine" aria-hidden="true" />
    </div>
  );
}
