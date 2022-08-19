// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/57zT2i7HGCQsfHmEGwcN/books';
// eslint-disable-next-line import/prefer-default-export
export const getAllBooks = () => fetch(URL).then((response) => response.json());
