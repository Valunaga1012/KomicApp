import { Directive } from '@angular/core';

@Directive({
  selector: '[komicSwiperOpacity]',
  host:{
    class: 'swiper--opacity'
  }
})
export class KomicSwiperOpacityDirective {

  constructor() { }

}
