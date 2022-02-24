import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../sass/components/book.module.scss';
import { removeBook } from '../redux/books/books';
import Spinner from './Spinner';

const Book = ({ props }) => {
  const dispatch = useDispatch();
  const [id, [{ category, title }]] = props;
  const {
    book, header, update, bookHeaderMenu, menuItem, btn, link,
  } = styles;

  const removeBookFromStore = () => {
    const selectedBook = {
      id,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(removeBook(selectedBook));
  };

  const randomProgress = Math.floor(Math.random() * 100 + 1);

  return (
    <article className={book}>
      <div className={header}>
        <header>
          <h3>{category}</h3>
          <h2>{title}</h2>
          <button className={link} type="button" href="#">
            Author
          </button>
        </header>

        <ul className={bookHeaderMenu}>
          <li className={menuItem}>
            <button className={link} type="button" href="#">
              Comments
            </button>
          </li>
          <hr />
          <li className={menuItem}>
            <button
              className={link}
              onClick={removeBookFromStore}
              type="button"
              href="#"
            >
              Remove
            </button>
          </li>
          <hr />
          <li className={menuItem}>
            <button className={link} type="button" href="#">
              Edit
            </button>
          </li>
        </ul>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Spinner progress={randomProgress} />
        <div>
          <p style={{ fontSize: '2.4rem', fontWeight: 300 }}>
            {randomProgress}
            %
          </p>
          <p style={{ fontWeight: 200, opacity: 0.75 }}>Compleated</p>
        </div>
      </div>

      <div className={update}>
        <h3>CURRENT CHAPTER</h3>
        <p>chapter</p>
        <button className={btn} type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </article>
  );
};

Book.propTypes = {
  props: PropTypes.objectOf(PropTypes.arrays).isRequired,
};

export default Book;
