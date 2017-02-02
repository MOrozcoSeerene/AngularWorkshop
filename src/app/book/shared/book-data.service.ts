import { Injectable } from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookDataService {
  private books: Book[];
  private BOOKS_URL_ENDPOINT = 'http://localhost:4730/books';
  private BOOKS_ISBN_URL_ENDPOINT = 'http://localhost:4730/books/';

  constructor(private http: Http) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.BOOKS_URL_ENDPOINT).map((response: Response) => response.json());
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get(this.BOOKS_ISBN_URL_ENDPOINT + isbn).map((response: Response) => response.json());
  }
}
