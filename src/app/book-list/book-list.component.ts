///<reference path="../shared/book-data.service.ts"/>
import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {BookDataService} from "../shared/book-data.service";
import {Observable} from "rxjs";
import {Response} from "@angular/http";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];

  constructor(private bookData: BookDataService) {
    let observable: Observable<Book[]> = bookData.getBooks();
    observable.subscribe(result => {
        this.books = result;
    });
  }

  ngOnInit() {

  }
}
