import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { initBooks } from '../redux/books/books';
import Book from './Book';
import styles from '../sass/components/list.module.scss';

const List = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initBooks());
  }, [dispatch]);
  const { list } = styles;

  return (
    <ul className={list}>
      {state.booksReducer &&
        state.booksReducer.map((book) => (
          <li key={book.title}>
            <Book props={book} />
          </li>
        ))}
    </ul>
  );
};

export default List;
