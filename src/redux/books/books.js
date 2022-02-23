import BookAPI from '../BookAPI';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  const newNote = await BookAPI.se;
  dispatch({ type: ADD_BOOK, payload });
};

export const removeBook = () => async (dispatch) => ({
  type: REMOVE_BOOK,
  payload,
});

export const initBooks = () => async (dispatch) => {
  const books = await BookAPI.getBooks();
  dispatch({ type: GET_BOOKS, payload: books });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];
    case GET_BOOKS:
      return [...Object.entries(action.payload)];

    default:
      return state;
  }
};

export default reducer;
