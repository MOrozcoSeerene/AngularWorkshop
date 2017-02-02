import {Routes, RouterModule} from "@angular/router";
import {BookComponent} from "./book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

// Define routes
export const routes: Routes = [
  { path: 'books', component: BookComponent, children: [
    {
      component: BookListComponent,
      path: '',
    },
    {
      component: BookDetailsComponent,
      path: ':isbn',
    }
  ]},
];

// Create a new module with configured router
export const routing = RouterModule.forChild(routes);
