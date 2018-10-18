import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAnalysisComponent } from './team-analysis.component';

describe('TeamAnalysisComponent', () => {
  let component: TeamAnalysisComponent;
  let fixture: ComponentFixture<TeamAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
