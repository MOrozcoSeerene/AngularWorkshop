///<reference path="../shared/book-data.service.ts"/>
import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {BookDataService} from "../shared/book-data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];

  constructor(private bookData: BookDataService) {
    let observable: any = bookData.getBooksSequenatially();
    observable.subscribe(value => {
        this.books.push(value);
    });
  }

  ngOnInit() {

  }
}
