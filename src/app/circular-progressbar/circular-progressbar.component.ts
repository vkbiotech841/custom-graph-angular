import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circular-progressbar',
  templateUrl: './circular-progressbar.component.html',
  styleUrls: ['./circular-progressbar.component.scss']
})
export class CircularProgressbarComponent implements OnInit, OnChanges {

  @Input() value: any;

  radius = 40;
  circumference = 2 * Math.PI * this.radius;
  dashoffset: any;

  constructor() {
    this.progress(0);
  }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.currentValue !== changes.value.previousValue) {
      this.progress(changes.value.currentValue);
    }
  }

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }

}
