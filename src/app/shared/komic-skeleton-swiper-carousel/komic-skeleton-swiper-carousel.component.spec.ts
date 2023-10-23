import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicSkeletonSwiperCarouselComponent } from './komic-skeleton-swiper-carousel.component';

describe('KomicSkeletonSwiperCarouselComponent', () => {
  let component: KomicSkeletonSwiperCarouselComponent;
  let fixture: ComponentFixture<KomicSkeletonSwiperCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicSkeletonSwiperCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicSkeletonSwiperCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
