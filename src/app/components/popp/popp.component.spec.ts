import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoppComponent } from './popp.component';

describe('PoppComponent', () => {
  let component: PoppComponent;
  let fixture: ComponentFixture<PoppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
