import { Injectable } from '@angular/core';
import {Book} from "./book";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class BookDataService {
  private books: Book[];
  private URL_ENDPOINT: string = "http://localhost:4730/books";

  constructor(private http: Http) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.URL_ENDPOINT).map((response : Response) => response.json());
  }
}
