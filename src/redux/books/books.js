/* eslint-disable no-unused-vars */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBooks } from '../../api/api';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/57zT2i7HGCQsfHmEGwcN/books';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

// Action Creators
// add book use fetch api
export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await axios.post(BASE_URL, {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    return {
      newBook: {
        item_id: book.id,
        author: book.author,
        title: book.title,
        category: book.category,
      },
    };
  },
);

const convertDataObjectToArray = (data) => {
  const dataArray = [];

  Object.keys(data).map((key) => {
    const book = data[key][0];
    book.item_id = key;
    return dataArray.push(book);
  });

  return dataArray;
};

// getbooks

export const getBooks = () => async (dispatch) => {
  const data = await getAllBooks();
  console.log(data, 'data');
  const convertedData = convertDataObjectToArray(data);
  dispatch({ type: GET_BOOKS, payload: convertedData });
};

// remove book
export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${BASE_URL}/${id}`).then((response) => console.log(response));
  return { id };
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload.newBook];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
