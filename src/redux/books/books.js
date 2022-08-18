const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    id: 1,
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    id: 2,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    id: 3,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    id: 4,
  },

];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id).map((book) => ({
        ...book,
      }));
    default:
      return state;
  }
};

export default reducer;
