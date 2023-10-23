import { Directive } from '@angular/core';

@Directive({
  selector: '[komicButton]',
  host: {
    class: 'komic-button--primary'
  }
})
export class KomicButtonDirective {

  constructor() { }

}
