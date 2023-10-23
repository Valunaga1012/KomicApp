import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicCarouselComponent } from './komic-carousel.component';

describe('KomicCarouselComponent', () => {
  let component: KomicCarouselComponent;
  let fixture: ComponentFixture<KomicCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
