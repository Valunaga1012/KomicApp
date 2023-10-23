import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicButtonComponent } from './komic-button.component';

describe('KomicButtonComponent', () => {
  let component: KomicButtonComponent;
  let fixture: ComponentFixture<KomicButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
