import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargraphVerticalMultipleComponent } from './bargraph-vertical-multiple.component';

describe('BargraphVerticalMultipleComponent', () => {
  let component: BargraphVerticalMultipleComponent;
  let fixture: ComponentFixture<BargraphVerticalMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargraphVerticalMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BargraphVerticalMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
