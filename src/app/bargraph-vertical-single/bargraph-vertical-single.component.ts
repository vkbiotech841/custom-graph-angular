import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bargraph-vertical-single',
  templateUrl: './bargraph-vertical-single.component.html',
  styleUrls: ['./bargraph-vertical-single.component.scss']
})
export class BargraphVerticalSingleComponent implements OnInit {


  @Input() tagPerformanceDetails: any;

  constructor() { }

  ngOnInit(): void {
  }



}
