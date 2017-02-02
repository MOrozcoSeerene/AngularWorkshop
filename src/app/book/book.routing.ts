import {Routes, RouterModule} from '@angular/router';
import {BookComponent} from './book.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {ConfirmCandeactivateGuardService} from './shared/confirm-candeactivate-guard.service';

// Define routes
export const routes: Routes = [
  { path: '', component: BookComponent, children: [
    {
      component: BookListComponent,
      path: '',
    },
    {
      component: BookDetailsComponent,
      path: ':isbn',
      canDeactivate: [ConfirmCandeactivateGuardService],
    }
  ]},
];

// Create a new module with configured router
export const routing = RouterModule.forChild(routes);
