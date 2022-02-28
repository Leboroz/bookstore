import BookAPI from '../BookAPI';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const UPDATE_BOOK = 'UPDATE_BOOK';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  BookAPI.setBook(payload).then(() => {
    const { item_id: id, title, category } = payload;
    dispatch({ type: ADD_BOOK, payload: [id, [{ title, category }]] });
  });
};

export const removeBook = (payload) => async (dispatch) => {
  BookAPI.deleteBook(payload.id).then(() => {
    dispatch({ type: REMOVE_BOOK, payload });
  });
};

export const updateBook = (payload) => async (dispatch) => {
  BookAPI.update(payload).then(() => {
    const { id, title, category } = payload;
    dispatch({ type: UPDATE_BOOK, payload: [id, [{ title, category }]] });
  });
};

export const initBooks = () => async (dispatch) => {
  const books = await BookAPI.getBooks();
  dispatch({ type: GET_BOOKS, payload: books });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book[0] !== action.payload.id)];
    case GET_BOOKS:
      return [...Object.entries(action.payload)];
    case UPDATE_BOOK:
      return [
        ...state.map((book) => (book[0] === action.payload[0] ? action.payload : book)),
      ];

    default:
      return state;
  }
};

export default reducer;
