import { Component, OnInit, OnDestroy } from '@angular/core';
import {BookDataService} from "../shared/book-data.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {Book} from "../shared/book";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public book : Book ;
  private subscription : Subscription;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.route.params.subscribe((params: {isbn: string}) => {
      let observable : Observable<Book> = this.bookData.getBookByIsbn(params.isbn);
      this.subscription = observable.subscribe((value) => {
        this.book = value;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
