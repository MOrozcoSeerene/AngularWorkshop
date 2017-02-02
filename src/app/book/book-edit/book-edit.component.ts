import {Component, OnInit, Input} from '@angular/core';
import {Book} from "../shared/book";

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  @Input('book') book : Book;

  constructor() { }

  ngOnInit() {
  }

}
