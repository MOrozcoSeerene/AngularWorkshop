import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

// Define routes
export const appRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', component: BookListComponent },
  { path: 'books/:isbn', component: BookDetailsComponent}
  ];

// Create a new module with configured router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
