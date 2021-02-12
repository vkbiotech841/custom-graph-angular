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

  circularProgressValueForSingle = 70;

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
