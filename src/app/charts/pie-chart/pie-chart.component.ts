import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
      ['Total Application', 45.0],
      ['At Counter', 26.8],
      ['At Lab', 12.8],
      ['At Sectional Engineer', 8.5],
      ['At Deputy Engineer', 6.2],
      ['At Executive Engineer', 0.7]
   ];
   columnNames = ['Browser', 'Percentage'];
   options = {
   };
   width = 550;
   height = 400;

}


