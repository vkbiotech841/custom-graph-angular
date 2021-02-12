import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargraphVerticalSingleComponent } from './bargraph-vertical-single.component';

describe('BargraphVerticalSingleComponent', () => {
  let component: BargraphVerticalSingleComponent;
  let fixture: ComponentFixture<BargraphVerticalSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargraphVerticalSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BargraphVerticalSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
