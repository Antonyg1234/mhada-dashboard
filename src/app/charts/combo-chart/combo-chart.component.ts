import { Component, OnInit, Input } from '@angular/core';
import { DashboardDetail} from '../../content-area/views/project-detail/project-detail.service';

@Component({
  selector: 'app-combo-chart',
  templateUrl: './combo-chart.component.html',
  styleUrls: ['./combo-chart.component.css']
})
export class ComboChartComponent implements OnInit {
  @Input() dashboardDetails: DashboardDetail[] ;
  title = 'Expected';
  title1 = 'Received';
   type = 'ComboChart';
   data:any=[];
   data1:any=[];
  //  data = [
  //     ["Previous", 3, 2, 2.5],
  //     ["current",2, 3, 2.5],
  //     ["Pears", 1, 5, 3],
  //     ["Bananas", 3, 9, 6],
  //     ["Plums", 4, 2, 3]
  //  ];
   columnNames = ['Bills', 'Expected'];
   columnNames1 = ['Bills', 'Received'];   
   options = {   
      hAxis: {
         title: 'Month'
      },
      vAxis:{
         title: 'Amount'
      },
      seriesType: 'bars',
      series: {2: {type: 'line'}}
   };
   width = 550;
   height = 400;
  constructor() { }

  ngOnInit() {
      this.data.push(["Previous",0.00]);
      this.data.push(["Current",233438093]);
      this.data1.push(["Previous",0.00]);
      this.data1.push(["Current",61640]);

      console.log('from combo chart',this.dashboardDetails)
  }

}
