import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicSkeletonSwiperComponent } from './komic-skeleton-swiper.component';

describe('KomicSkeletonSwiperComponent', () => {
  let component: KomicSkeletonSwiperComponent;
  let fixture: ComponentFixture<KomicSkeletonSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicSkeletonSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicSkeletonSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
