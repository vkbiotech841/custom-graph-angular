import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circular-progressbar-multiple',
  templateUrl: './circular-progressbar-multiple.component.html',
  styleUrls: ['./circular-progressbar-multiple.component.scss']
})
export class CircularProgressbarMultipleComponent implements OnInit, OnChanges {

  @Input() value: any;
  @Input() circularProgressbarDesignObject: any;

  radius = 60;
  circumference = 2 * Math.PI * this.radius;
  dashoffset: any;

  constructor() { }

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
