import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicPaginatorComponent } from './komic-paginator.component';

describe('KomicPaginatorComponent', () => {
  let component: KomicPaginatorComponent;
  let fixture: ComponentFixture<KomicPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicPaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomicPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
