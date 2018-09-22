import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftpickComponent } from './shiftpick.component';

describe('ShiftpickComponent', () => {
  let component: ShiftpickComponent;
  let fixture: ComponentFixture<ShiftpickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftpickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftpickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
