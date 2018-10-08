import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickRateComponent } from './tick-rate.component';

describe('TickRateComponent', () => {
  let component: TickRateComponent;
  let fixture: ComponentFixture<TickRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
