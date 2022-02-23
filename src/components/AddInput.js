import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(), // make sure it's unique
      title,
      category,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    e.target.reset();
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore} action="">
        <label htmlFor="title">
          <input
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            placeholder="Book title"
            value={title}
            required
          />
        </label>
        <label htmlFor="category">
          <input
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            type="text"
            placeholder="Category"
            value={category}
            required
          />
        </label>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddInput;
