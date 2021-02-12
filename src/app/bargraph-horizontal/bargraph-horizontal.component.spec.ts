import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargraphHorizontalComponent } from './bargraph-horizontal.component';

describe('BargraphHorizontalComponent', () => {
  let component: BargraphHorizontalComponent;
  let fixture: ComponentFixture<BargraphHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargraphHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BargraphHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
