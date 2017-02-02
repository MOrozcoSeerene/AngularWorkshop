import { Injectable } from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Book} from './book';
import {Observable} from 'rxjs';

@Injectable()
export class ConfirmCandeactivateGuardService implements CanDeactivate<Book> {

  constructor() { }

  canDeactivate(component: Book, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return confirm('Are you sure?');
  }
}
