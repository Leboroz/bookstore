import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../sass/components/book.module.scss';
import { removeBook } from '../redux/books/books';

const Book = ({ props }) => {
  const dispatch = useDispatch();
  const [id, [{ category, title }]] = props;
  const {
    book, header, progress, update, bookHeaderMenu, menuItem,
  } = styles;

  const removeBookFromStore = () => {
    const selectedBook = {
      id,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(removeBook(selectedBook));
  };

  return (
    <article className={book}>
      <div className={header}>
        <header>
          <h3>{category}</h3>
          <h2>{title}</h2>
          <button type="button" href="#">
            author
          </button>
        </header>
        <ul className={bookHeaderMenu}>
          <li className={menuItem}>
            <button type="button" href="#">
              Comments
            </button>
          </li>
          <li className={menuItem}>
            <button onClick={removeBookFromStore} type="button" href="#">
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
        <p>chapter</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </article>
  );
};

Book.propTypes = {
  props: PropTypes.objectOf(PropTypes.arrays).isRequired,
};

export default Book;
