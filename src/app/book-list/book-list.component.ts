///<reference path="../shared/book-data.service.ts"/>
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Book} from "../shared/book";
import {BookDataService} from "../shared/book-data.service";
import {Observable, Subscription} from "rxjs";
import 'rxjs/Rx';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  public books: Book[] = [];
  private subscription: Subscription;

  constructor(private bookData: BookDataService) {
  }

  ngOnInit() {
    let observable: Observable<Book[]> = this.bookData.getBooks();
    this.subscription = observable.subscribe(result => {
      this.books = result;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
