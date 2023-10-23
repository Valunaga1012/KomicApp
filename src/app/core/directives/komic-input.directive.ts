import { Directive } from '@angular/core';

@Directive({
  selector: '[komicInput]',
  host: {
    class: 'komic-input'
  }
})
export class KomicInputDirective {

  constructor() { }

}
