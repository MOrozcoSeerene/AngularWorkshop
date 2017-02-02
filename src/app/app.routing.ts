import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

// Define routes
export const appRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
];

// Create a new module with configured router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
