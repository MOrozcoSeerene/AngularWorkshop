import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book application';

  public receiveEvent = function($event) {
    console.debug('I Have received an event: ' + $event);
  };
};
