import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bargraph-horizontal',
  templateUrl: './bargraph-horizontal.component.html',
  styleUrls: ['./bargraph-horizontal.component.scss']
})
export class BargraphHorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  classPerformanceDetails: any[] = [
    {
      subject: 'mathematics',
      totalStudent: '40',
      studenAboveAverage: '20',
      percentageOfStudentAboveAverage: '50'
    },
    {
      subject: 'science',
      totalStudent: '40',
      studenAboveAverage: '30',
      percentageOfStudentAboveAverage: '75'
    },
    {
      subject: 'english',
      totalStudent: '40',
      studenAboveAverage: '10',
      percentageOfStudentAboveAverage: '25'
    },
    {
      subject: 'history',
      totalStudent: '40',
      studenAboveAverage: '40',
      percentageOfStudentAboveAverage: '100'
    },
    {
      subject: 'geography',
      totalStudent: '40',
      studenAboveAverage: '10',
      percentageOfStudentAboveAverage: '50'
    },
  ];

}
