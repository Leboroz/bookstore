import Book from './Book';
import styles from '../sass/components/list.module.scss';

const List = () => {
  const { list } = styles;
  const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      genre: 'action',
      chapter: 'Chapter 17',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      chapter: 'Chapter 3',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      genre: 'Economy',
      chapter: 'Introduction',
    },
  ];

  return (
    <ul className={list}>
      {books.map((book) => (
        <li key={book.title}>
          <Book props={book} />
        </li>
      ))}
    </ul>
  );
};

export default List;
