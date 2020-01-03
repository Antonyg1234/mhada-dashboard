import { Component, OnInit, Input } from '@angular/core';
import { DashboardDetail} from '../../content-area/views/project-detail/project-detail.service';

@Component({
  selector: 'app-combo-chart',
  templateUrl: './combo-chart.component.html',
  styleUrls: ['./combo-chart.component.css']
})
export class ComboChartComponent implements OnInit {
  @Input() dashboardDetails: DashboardDetail[] ;
  @Input() View:any;
  title = 'Expected';
  title1 = 'Recovered';
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
   columnNames1 = ['Bills', 'Recovered'];   
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
     this.View[0].data.body.forEach(element => {
        console.log(element)
        var matches = element.Expected.match(/(\d+)/); 
        this.data.push([element.Month,parseInt(matches[0])]);

        var matches1 = element.Recovered.match(/(\d+)/); 
        this.data1.push([element.Month,parseInt(matches1[0])]);
     });
      // this.data.push(["Previous",0.00]);
      // this.data.push(["Current",233438093]);
      // this.data1.push(["Previous",0.00]);
      // this.data1.push(["Current",61640]);

      console.log('from combo chart',this.dashboardDetails)
  }

}
