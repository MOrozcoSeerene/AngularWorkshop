import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ConfirmCandeactivateGuardService} from "./book/shared/confirm-candeactivate-guard.service";

// Define routes
export const appRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', loadChildren: './book/book.module#BookModule'}
];

// Create a new module with configured router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
