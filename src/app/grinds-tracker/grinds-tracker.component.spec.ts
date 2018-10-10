import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindsTrackerComponent } from './grinds-tracker.component';

describe('GrindsTrackerComponent', () => {
  let component: GrindsTrackerComponent;
  let fixture: ComponentFixture<GrindsTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindsTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
