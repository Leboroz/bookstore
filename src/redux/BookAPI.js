export default class BookAPI {
  static ID = 'PPmzCdkJdt6QqGWjZern';

  static URL =
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  static BOOKS = '/books/';

  static getBooks() {
    return fetch(this.URL + this.ID + this.BOOKS).then((res) => res.json());
  }

  static setBook(book) {
    return fetch(this.URL + this.ID + this.BOOKS, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(book),
    });
  }

  static update({ id, category, title }) {
    return this.deleteBook(id).then(() => {
      this.setBook({ item_id: id, category, title });
    });
  }

  static deleteBook(id) {
    return fetch(this.URL + this.ID + this.BOOKS + id, {
      method: 'DELETE', // GET, POST, PUT, DELETE
    });
  }
}
