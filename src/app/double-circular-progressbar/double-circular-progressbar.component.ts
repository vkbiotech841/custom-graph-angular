import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-double-circular-progressbar',
  templateUrl: './double-circular-progressbar.component.html',
  styleUrls: ['./double-circular-progressbar.component.scss']
})
export class DoubleCircularProgressbarComponent implements OnInit {

  @Input() value: any;
  @Input() value2: any;

  radius = 60;
  circumference = ((2 * Math.PI * this.radius) / 4) * 3;
  dashoffset: any;

  radius2 = 40;
  circumference2 = ((2 * Math.PI * this.radius2) / 4) * 3;
  dashoffset2: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.currentValue !== changes.value.previousValue) {
      this.progress(changes.value.currentValue);
      this.progress2(changes.value2.currentValue);
    }
  }

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
    console.log("value", value, "progress", progress, "dashoffset", this.dashoffset);
  }

  private progress2(value: number) {
    const progress2 = value / 100;
    this.dashoffset2 = this.circumference2 * (1 - progress2);
    console.log("value", value, "progress", progress2, "dashoffset", this.dashoffset);
  }

}
