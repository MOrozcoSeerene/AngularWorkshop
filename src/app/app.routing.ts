import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";

// Define routes
export const appRoutes: Routes = [
  {
    path: 'books',
    component: BookListComponent},
  ];

// Create a new module with configured router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
