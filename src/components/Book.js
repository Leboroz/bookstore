import styles from '../sass/components/book.module.scss';

const Book = ({ props }) => {
  const { chapter, genre, author, title } = props;
  const { book, header, progress, update, bookHeaderMenu, menuItem } = styles;

  return (
    <article className={book}>
      <div className={header}>
        <header>
          <h3>{genre}</h3>
          <h2>{title}</h2>
          <a>{author}</a>
        </header>
        <ul className={bookHeaderMenu}>
          <li className={menuItem}>
            <a>Comments</a>
          </li>
          <li className={menuItem}>
            <a>Remove</a>
          </li>
          <li className={menuItem}>
            <a>Edit</a>
          </li>
        </ul>
      </div>
      <div className={progress}>progress</div>
      <div className={update}>
        <h3>CURRENT CHAPTER</h3>
        <p>{chapter}</p>
        <button>UPDATE PROGRESS</button>
      </div>
    </article>
  );
};

export default Book;
