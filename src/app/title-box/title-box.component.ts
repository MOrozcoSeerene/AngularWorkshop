import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {
  @Input() title: string;
  @Output() ping: EventEmitter<string>;
  @Output() titleClicked = new EventEmitter<string>();

  constructor() {
  }

  public handleTitleClicked() {
    this.titleClicked.emit('EventData')
  }

  public emitPing = function() {
    this.ping.emit('Hello!');
  }

  ngOnInit() {
    this.title += 'added to title';
  }

}
