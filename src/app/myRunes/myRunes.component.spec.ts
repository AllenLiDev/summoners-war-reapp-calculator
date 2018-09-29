import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRunesComponent } from './myRunes.component';

describe('MyRunesComponent', () => {
  let component: MyRunesComponent;
  let fixture: ComponentFixture<MyRunesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRunesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
