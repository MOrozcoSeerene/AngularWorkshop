import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {BookDataService} from "../shared/book-data.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Book[];

  constructor(private bookData: BookDataService) {
      this.books = bookData.getBooks();
  }

  ngOnInit() {

  }

}
