import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import styles from '../sass/components/add-input.module.scss';

const AddInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fantasy');

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(), // make sure it's unique
      title: [title, author],
      category: { name: category, total: null, currentProgress: null },
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    e.target.reset();
  };
  const {
    form, formHeader, formInput, btn,
  } = styles;
  const listOfCategories = [
    'Fantasy',
    'Fiction',
    'Dystopian',
    'Adventure',
    'Romance',
    'Detective & Mystery',
    'Horror',
    'Thriller',
    'Fiction',
    'Memoir & Autobiography',
    'Biography',
    'Cooking',
    'Art & Photography',
    'Motivational / Inspirational',
    'Health & Fitness',
    'History',
    'Hobbies & Home',
    'Families & Relationships',
    'Humor & Entertainment',
    'Business & Money',
    'Law & Criminology',
    'Sciences',
    'Religion & Spirituality',
    'Education & Teaching',
    'Travel',
    'Crime',
  ];

  return (
    <div style={{ width: '100%', marginBottom: '100px' }}>
      <hr style={{ borderColor: 'rgb(0 0 0 / 0.1)' }} />
      <h2 className={formHeader}>ADD NEW BOOK</h2>
      <form className={form} onSubmit={submitBookToStore} action="">
        <label style={{ flex: 1 }} htmlFor="title">
          <input
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            placeholder="Book title"
            value={title}
            className={`${formInput}`}
            required
          />
        </label>
        <label style={{ flex: 1 }} htmlFor="author">
          <input
            onChange={(e) => setAuthor(e.target.value)}
            id="author"
            type="text"
            placeholder="Author"
            value={author}
            className={`${formInput}`}
            required
          />
        </label>
        <label style={{ flex: 1 }} htmlFor="category">
          <select
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            type="text"
            placeholder="Category"
            value={category}
            className={formInput}
            required
          >
            {listOfCategories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <button className={btn} type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddInput;
