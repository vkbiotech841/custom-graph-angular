import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleCircularProgressbarComponent } from './double-circular-progressbar.component';

describe('DoubleCircularProgressbarComponent', () => {
  let component: DoubleCircularProgressbarComponent;
  let fixture: ComponentFixture<DoubleCircularProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleCircularProgressbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleCircularProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
