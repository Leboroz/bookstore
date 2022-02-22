import PropTypes from 'prop-types';
import styles from '../sass/components/book.module.scss';

const Book = ({ props }) => {
  const {
    chapter, genre, author, title,
  } = props;
  const {
    book, header, progress, update, bookHeaderMenu, menuItem,
  } = styles;

  return (
    <article className={book}>
      <div className={header}>
        <header>
          <h3>{genre}</h3>
          <h2>{title}</h2>
          <button type="button" href="#">
            {author}
          </button>
        </header>
        <ul className={bookHeaderMenu}>
          <li className={menuItem}>
            <button type="button" href="#">
              Comments
            </button>
          </li>
          <li className={menuItem}>
            <button type="button" href="#">
              Remove
            </button>
          </li>
          <li className={menuItem}>
            <button type="button" href="#">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className={progress}>progress</div>
      <div className={update}>
        <h3>CURRENT CHAPTER</h3>
        <p>{chapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </article>
  );
};

Book.propTypes = {
  props: {}.isRequired,
  chapter: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
