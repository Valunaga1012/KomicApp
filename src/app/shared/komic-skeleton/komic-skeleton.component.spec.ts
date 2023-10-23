import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicSkeletonComponent } from './komic-skeleton.component';

describe('KomicSkeletonComponent', () => {
  let component: KomicSkeletonComponent;
  let fixture: ComponentFixture<KomicSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
