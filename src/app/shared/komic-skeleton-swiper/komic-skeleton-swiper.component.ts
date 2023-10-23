import { Component, Input } from '@angular/core';

@Component({
  selector: 'komic-skeleton-swiper',
  templateUrl: './komic-skeleton-swiper.component.html',
  styleUrls: ['./komic-skeleton-swiper.component.scss']
})
export class KomicSkeletonSwiperComponent {
@Input() skeletonWidth!:string;
@Input() skeletonHeight!:string;
}
