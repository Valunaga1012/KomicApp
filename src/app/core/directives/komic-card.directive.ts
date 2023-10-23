import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[komicCard]',
  host: {
    class :'card--primary'
  }
})
export class KomicCardDirective {

}
