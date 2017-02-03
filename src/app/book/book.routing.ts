///<reference path="book-edit/book-edit.component.ts"/>
import {Routes, RouterModule} from '@angular/router';
import {BookComponent} from './book.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {ConfirmCandeactivateGuardService} from './shared/confirm-candeactivate-guard.service';
import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookEditReactiveComponent} from "./book-edit-reactive/book-edit-reactive.component";

// Define routes
export const routes: Routes = [
  { path: '', component: BookComponent, children: [
    {
      component: BookListComponent,
      path: '',
    },
    {
      component: BookEditReactiveComponent,
      path: 'new',
    },
    {
      component: BookDetailsComponent,
      path: ':isbn',
      canDeactivate: [ConfirmCandeactivateGuardService],
    },
    {
      component: BookEditComponent,
      path: ':isbn/edit',
    }
  ]},
];

// Create a new module with configured router
export const routing = RouterModule.forChild(routes);
