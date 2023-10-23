import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicCardComponent } from './komic-card.component';

describe('KomicCardComponent', () => {
  let component: KomicCardComponent;
  let fixture: ComponentFixture<KomicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
