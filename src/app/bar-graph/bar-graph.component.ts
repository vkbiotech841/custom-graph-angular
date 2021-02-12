import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

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

  ]

}
