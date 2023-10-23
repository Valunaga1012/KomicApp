import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KomicButtonDirective } from './komic-button.directive';
import { KomicCardSmallDirective } from './komic-card-small.directive';
import { KomicCardDirective } from './komic-card.directive';
import { KomicInputDirective } from './komic-input.directive';
import { KomicSwiperOpacityDirective } from './komic-swiper-opacity.directive';

@NgModule({
  declarations: [
    KomicInputDirective,
    KomicCardSmallDirective,
    KomicButtonDirective,
    KomicCardDirective,
    KomicSwiperOpacityDirective,
  ],
  imports: [CommonModule],
  exports: [
    KomicInputDirective,
    KomicCardSmallDirective,
    KomicButtonDirective,
    KomicCardDirective,
    KomicSwiperOpacityDirective
  ],
})
export class DirectivesModule {}
