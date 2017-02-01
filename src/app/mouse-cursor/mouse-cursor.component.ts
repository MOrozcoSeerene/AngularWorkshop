import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {

  public xPosition: number = -1;
  public yPosition: number = -1;

  public updateMousePosition = function(event) {
    debugger;
    this.xPosition = event.clientX - event.target.offsetLeft;
    this.yPosition = event.clientY - event.target.offsetTop;
  }

  public onMouseOut = function() {
    this.xPosition = -1;
    this.yPosition = -1;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
