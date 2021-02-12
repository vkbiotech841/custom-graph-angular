import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-layout',
  templateUrl: './graph-layout.component.html',
  styleUrls: ['./graph-layout.component.scss']
})
export class GraphLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // For single vertical bar graph
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

  // For multiple vertical bar graphs
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

  // For horizontal bar graph
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


  // For Single circular progress bar
  circularProgressValueForSingle = 70;


  // For multiple circular progress bars:
  circularProgressbarDesignObject1 = {
    stroke_value: '#A3A1FB',
    stroke_meter: 'rgba(163, 161, 251, 0.24);',
    circularProgressValue: 70,
    innerText: 'Class performance'
  }

  circularProgressbarDesignObject2 = {
    stroke_value: '#D896EF',
    stroke_meter: 'rgba(216, 150, 239, 0.2)',
    circularProgressValue: 75,
    innerText: "Teacher's assessment score"
  }

  circularProgressbarDesignObject3 = {
    stroke_value: '#58C3FF',
    stroke_meter: 'rgba(88, 195, 255, 0.24)',
    circularProgressValue: 80,
    innerText: 'Content delivery speed'
  }

  circularProgressbarDesignObject4 = {
    stroke_value: '#8BD68A',
    stroke_meter: 'rgba(139, 214, 138, 0.26)',
    circularProgressValue: 90,
    innerText: 'Student Attendance'
  }

  circularProgressbarDesignObject5 = {
    stroke_value: '#6398FE',
    stroke_meter: 'rgba(99, 152, 254, 0.19)',
    circularProgressValue: 50,
    innerText: 'Ratings by students'
  }

}
