import {
  Component,
  Input
} from '@angular/core';
import { TEXT_DEFAULT } from 'src/app/core/constants/text-default';
import { CharacterResults } from 'src/app/core/models/character.interface';
import SwiperCore, {
  Autoplay
} from 'swiper';
SwiperCore.use([
  Autoplay,
]);
@Component({
  selector: 'komic-carousel',
  templateUrl: './komic-carousel.component.html',
  styleUrls: ['./komic-carousel.component.scss'],
})
export class KomicCarouselComponent {
  @Input() data!: CharacterResults;
  textDefault: string = TEXT_DEFAULT;
}
