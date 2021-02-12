import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bargraph-horizontal',
  templateUrl: './bargraph-horizontal.component.html',
  styleUrls: ['./bargraph-horizontal.component.scss']
})
export class BargraphHorizontalComponent implements OnInit {

  @Input() classPerformanceDetails: any;

  constructor() { }

  ngOnInit(): void {
  }



}
