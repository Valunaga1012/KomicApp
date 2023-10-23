import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicHeaderComponent } from './komic-header.component';

describe('KomicHeaderComponent', () => {
  let component: KomicHeaderComponent;
  let fixture: ComponentFixture<KomicHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
