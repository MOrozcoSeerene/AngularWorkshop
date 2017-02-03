import {NgModule, TemplateRef, ViewContainerRef} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BookDataService} from "./shared/book-data.service";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {routing} from "./book.routing";
import {BookComponent} from "./book.component";
import {ConfirmCandeactivateGuardService} from "./shared/confirm-candeactivate-guard.service";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookEditReactiveComponent} from "./book-edit-reactive/book-edit-reactive.component";
import {TooltipDirective} from "./shared/tooltip.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookEditReactiveComponent,
    TooltipDirective],
  providers: [BookDataService, ConfirmCandeactivateGuardService]
})

export class BookModule { }
