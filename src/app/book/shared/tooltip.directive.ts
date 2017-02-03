import {Directive, HostListener, Input, ElementRef} from "@angular/core";

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input() tooltip: string;

  private tooltipElement: HTMLDivElement;

  constructor(private elementRef: ElementRef) {
    this.tooltipElement = document.createElement('div');
    console.debug('Tooltip created');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.tooltipElement.innerHTML = this.tooltip;
    this.elementRef.nativeElement.appendChild(this.tooltipElement)
  };

  @HostListener('mouseleave')
  onMouseLeave() {
    console.debug('Bye');
    this.elementRef.nativeElement.removeChild(this.tooltipElement);
  };

}
