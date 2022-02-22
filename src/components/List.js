import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import Book from './Book';
import styles from '../sass/components/list.module.scss';

const List = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const books = [
      {
        id: uuidv4(),
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        genre: 'action',
        chapter: 'Chapter 17',
      },
      {
        id: uuidv4(),
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Science Fiction',
        chapter: 'Chapter 3',
      },
      {
        id: uuidv4(),
        title: 'Capital in the Twenty-First Century',
        author: 'Suzanne Collins',
        genre: 'Economy',
        chapter: 'Introduction',
      },
    ];
    books.forEach((book) => dispatch(addBook(book)));
  }, []);
  const { list } = styles;

  return (
    <ul className={list}>
      {state.booksReducer
        && state.booksReducer.map((book) => (
          <li key={book.title}>
            <Book props={book} />
          </li>
        ))}
    </ul>
  );
};

export default List;
