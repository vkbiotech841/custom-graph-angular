import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bargraph-vertical-multiple',
  templateUrl: './bargraph-vertical-multiple.component.html',
  styleUrls: ['./bargraph-vertical-multiple.component.scss']
})
export class BargraphVerticalMultipleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentPerformanceDetails: any[] = [
    {
      studentName: 'vikram',
      rollNumber: '12345',
      subjects: [
        {
          subjectName: 'mathematics',
          percentagePerformance: '80'
        },
        {
          subjectName: 'english',
          percentagePerformance: '60'
        },
        {
          subjectName: 'science',
          percentagePerformance: '90'
        },
      ]
    },

    {
      studentName: 'Fenas',
      rollNumber: '123458',
      subjects: [
        {
          subjectName: 'mathematics',
          percentagePerformance: '90'
        },
        {
          subjectName: 'english',
          percentagePerformance: '90'
        },
        {
          subjectName: 'science',
          percentagePerformance: '70'
        },
      ]
    },
    {
      studentName: 'Sid',
      rollNumber: '123489',
      subjects: [
        {
          subjectName: 'mathematics',
          percentagePerformance: '100'
        },
        {
          subjectName: 'english',
          percentagePerformance: '90'
        },
        {
          subjectName: 'science',
          percentagePerformance: '80'
        },
      ]
    },
    {
      studentName: 'vikram',
      rollNumber: '12345',
      subjects: [
        {
          subjectName: 'mathematics',
          percentagePerformance: '80'
        },
        {
          subjectName: 'english',
          percentagePerformance: '60'
        },
        {
          subjectName: 'science',
          percentagePerformance: '90'
        },
      ]
    },

    {
      studentName: 'Fenas',
      rollNumber: '123458',
      subjects: [
        {
          subjectName: 'mathematics',
          percentagePerformance: '90'
        },
        {
          subjectName: 'english',
          percentagePerformance: '90'
        },
        {
          subjectName: 'science',
          percentagePerformance: '70'
        },
      ]
    },
    {
      studentName: 'Sid',
      rollNumber: '123489',
      subjects: [
        {
          subjectName: 'mathematics',
          percentagePerformance: '100'
        },
        {
          subjectName: 'english',
          percentagePerformance: '90'
        },
        {
          subjectName: 'science',
          percentagePerformance: '80'
        },
      ]
    },
  ];

}
