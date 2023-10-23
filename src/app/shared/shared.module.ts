import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KomicCardComponent } from './komic-card/komic-card.component';
import { KomicHeaderComponent } from './komic-header/komic-header.component';
import { KomicInputComponent } from './komic-input/komic-input.component';
import { KomicButtonComponent } from './komic-button/komic-button.component';
import { KomicCarouselComponent } from './komic-carousel/komic-carousel.component';
import { KomicSliderComponent } from './komic-slider/komic-slider.component';
import { SwiperModule } from 'swiper/angular';
import { DirectivesModule } from '../core/directives/directives.module';
import { KomicModalComponent } from './komic-modal/komic-modal.component';
import { KomicPaginatorComponent } from './komic-paginator/komic-paginator.component';
import { KomicSkeletonComponent } from './komic-skeleton/komic-skeleton.component';
import { KomicSkeletonSwiperComponent } from './komic-skeleton-swiper/komic-skeleton-swiper.component';
import { KomicSkeletonSwiperCarouselComponent } from './komic-skeleton-swiper-carousel/komic-skeleton-swiper-carousel.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    KomicCardComponent,
    KomicHeaderComponent,
    KomicInputComponent,
    KomicButtonComponent,
    KomicCarouselComponent,
    KomicSliderComponent,
    KomicModalComponent,
    KomicPaginatorComponent,
    KomicSkeletonComponent,
    KomicSkeletonSwiperComponent,
    KomicSkeletonSwiperCarouselComponent,
  ],
  imports: [CommonModule, SwiperModule, DirectivesModule,  ModalModule.forRoot(),],
  exports: [
    KomicCardComponent,
    KomicHeaderComponent,
    KomicInputComponent,
    KomicButtonComponent,
    KomicCarouselComponent,
    KomicSliderComponent,
    KomicModalComponent,
    KomicPaginatorComponent,
    KomicSkeletonComponent,
    KomicSkeletonSwiperComponent
  ],
})
export class SharedModule {}
