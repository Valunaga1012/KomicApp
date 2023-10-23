import { Directive } from '@angular/core';

@Directive({
  selector: '[komicCardSmall]',
  host: {
    class: 'card--small'
  }
})
export class KomicCardSmallDirective {

  constructor() { }

}
