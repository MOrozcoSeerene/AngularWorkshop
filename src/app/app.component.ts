import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Info box component';

  public receiveEvent = function($event) {
    debugger;
    console.debug('I Have received an event: ' + $event);
  }
}
