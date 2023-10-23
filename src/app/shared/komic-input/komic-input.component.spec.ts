import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicInputComponent } from './komic-input.component';

describe('KomicInputComponent', () => {
  let component: KomicInputComponent;
  let fixture: ComponentFixture<KomicInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
