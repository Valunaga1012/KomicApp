import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicSliderComponent } from './komic-slider.component';

describe('KomicSliderComponent', () => {
  let component: KomicSliderComponent;
  let fixture: ComponentFixture<KomicSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
