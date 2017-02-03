import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {BookDataService} from "../shared/book-data.service";

@Component({
  selector: 'book-edit-reactive',
  templateUrl: './book-edit-reactive.component.html',
  styleUrls: ['./book-edit-reactive.component.css']
})
export class BookEditReactiveComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: BookDataService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      author: [''],
      isbn: [''],
      publisher: this.formBuilder.group({
        name: ['',Validators.required],
        url: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    debugger;
    this.service.createBook(this.form.value)
      .subscribe(() => alert('Book created'));
  }
}
