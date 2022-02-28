import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from '../sass/components/book.module.scss';
import { removeBook, updateBook } from '../redux/books/books';
import Spinner from './Spinner';
import ProgressForm from './ProgressForm';

const Book = ({ props }) => {
  const dispatch = useDispatch();
  const [id, [{ category, title }]] = props;
  const {
    book, header, update, bookHeaderMenu, menuItem, btn, link,
  } = styles;
  const [currentChapter, setCurrentChapter] = useState(
    category.currentProgress,
  );
  const [totalChapters, setTotalChapters] = useState(category.total);
  const [close, setClose] = useState(true);

  const removeBookFromStore = () => {
    const selectedBook = {
      id,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(removeBook(selectedBook));
  };

  const progressInPorcent = Math.round(
    (category.currentProgress / parseInt(category.total, 10)) * 100,
  ) || 0;
  const submitHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      total: totalChapters,
      currentProgress: currentChapter,
      name: category.name,
    };
    dispatch(updateBook({ id, category: newCategory, title }));
    setClose(true);
  };

  return (
    <article className={book}>
      <div className={header}>
        <header>
          <h3 style={{ color: 'rgb(0 0 0 / 0.7)' }}>{category.name}</h3>
          <h2>{title[0]}</h2>
          <button className={link} type="button" href="#">
            {title[1]}
          </button>
        </header>

        <ul className={bookHeaderMenu}>
          <li className={menuItem}>
            <button className={link} type="button" href="#">
              Comments
            </button>
          </li>

          <hr style={{ borderColor: 'rgb(0 0 0 / 0.1)' }} />

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

          <hr style={{ borderColor: 'rgb(0 0 0 / 0.1)' }} />

          <li className={menuItem}>
            <button className={link} type="button" href="#">
              Edit
            </button>
          </li>
        </ul>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Spinner progress={progressInPorcent} />

        <div>
          <p style={{ fontSize: '2.4rem', fontWeight: 300 }}>
            {progressInPorcent}
            %
          </p>
          <p style={{ fontWeight: 200, opacity: 0.75 }}>Compleated</p>
        </div>
      </div>

      <div className={update}>
        <header>
          <h4
            style={{
              fontWeight: '400',
              color: 'rgb(0 0 0 / 0.4)',
            }}
          >
            CURRENT CHAPTER
          </h4>
          {(category.currentProgress && (
            <p>
              Chapter
              {category.currentProgress}
            </p>
          )) || <h3 style={{ fontWeight: '400' }}>Not specified</h3>}
        </header>
        <div style={{ position: 'relative' }}>
          {!close && (
            <ProgressForm
              currentChapter={category.currentProgress}
              totalChapters={category.total}
              currentProgress={setCurrentChapter}
              total={setTotalChapters}
              setClose={setClose}
              submitHandler={submitHandler}
            />
          )}
          <button onClick={() => setClose(false)} className={btn} type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </article>
  );
};

Book.propTypes = {
  props: PropTypes.objectOf(PropTypes.arrays).isRequired,
};

export default Book;
