import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDataService} from './shared/book-data.service';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {routing} from './book.routing';
import {BookComponent} from './book.component';
import {ConfirmCandeactivateGuardService} from './shared/confirm-candeactivate-guard.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailsComponent],
  providers: [BookDataService, ConfirmCandeactivateGuardService]
})

export class BookModule { }
