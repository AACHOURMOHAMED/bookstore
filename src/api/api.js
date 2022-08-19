const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/57zT2i7HGCQsfHmEGwcN/books';

const getAllBooks = () => fetch(URL).then((response) => response.json());
export default getAllBooks;
