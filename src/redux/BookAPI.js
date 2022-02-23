export default class BookAPI {
  static ID = process.env.REACT_APP_ID;

  static URL =
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  static BOOKS = '/books/';

  static getBooks() {
    return fetch(this.URL + this.ID + this.BOOKS).then((res) => res.json());
  }

  static setBook({ id, title, category }) {
    return fetch(this.URL + this.ID + this.BOOKS, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ item_id: id, title, category }),
    });
  }

  static deleteBook(id) {
    return fetch(this.URL + this.ID + this.BOOKS + id, {
      method: 'DELETE', // GET, POST, PUT, DELETE
    });
  }
}
