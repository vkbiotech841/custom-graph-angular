import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bargraph-vertical-single',
  templateUrl: './bargraph-vertical-single.component.html',
  styleUrls: ['./bargraph-vertical-single.component.scss']
})
export class BargraphVerticalSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tagPerformanceDetails: any[] = [
    {
      name: 'tag1',
      percentagePerformance: '10'
    },
    {
      name: 'tag2',
      percentagePerformance: '20'
    },
    {
      name: 'tag3',
      percentagePerformance: '50'
    },
    {
      name: 'tag4',
      percentagePerformance: '30'
    },
    {
      name: 'tag5',
      percentagePerformance: '100'
    },
    {
      name: 'tag6',
      percentagePerformance: '20'
    },

  ];

}
