import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularProgressbarMultipleComponent } from './circular-progressbar-multiple.component';

describe('CircularProgressbarMultipleComponent', () => {
  let component: CircularProgressbarMultipleComponent;
  let fixture: ComponentFixture<CircularProgressbarMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularProgressbarMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularProgressbarMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
