import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicModalComponent } from './komic-modal.component';

describe('KomicModalComponent', () => {
  let component: KomicModalComponent;
  let fixture: ComponentFixture<KomicModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
