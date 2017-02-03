import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Book} from "../shared/book";
import {ActivatedRoute} from "@angular/router";
import {BookDataService} from "../shared/book-data.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit, OnDestroy {

  public book: Book;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.route.params.subscribe((params: {isbn: string}) => {
      const observable: Observable<Book> = this.bookData.getBookByIsbn(params.isbn);
      this.subscription = observable.subscribe((value) => {
        this.book = value;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public saveBook = function(book: Book) {

      console.debug('Saving book... ' + book);
      window.setTimeout(this.success, 1000);
  }

  private success = function() {
      console.debug('Success...');
  }

}
