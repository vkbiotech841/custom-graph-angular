import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bargraph-vertical-multiple',
  templateUrl: './bargraph-vertical-multiple.component.html',
  styleUrls: ['./bargraph-vertical-multiple.component.scss']
})
export class BargraphVerticalMultipleComponent implements OnInit {


  @Input() studentPerformanceDetails: any;

  constructor() { }

  ngOnInit(): void {
  }



}
