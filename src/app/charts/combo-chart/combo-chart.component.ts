import { Component, OnInit, Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
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
     this.setData();
  }
	setData(){
  	    let setData = [];
  	    let setData1 = [];
		if(this.View[0].data.body.length > 0) {
			this.View[0].data.body.forEach(element => {
				var matches = element.Expected.match(/(\d+)/);
				setData.push([element.Month, parseInt(matches[0])]);

				var matches1 = element.Recovered.match(/(\d+)/);
				setData1.push([element.Month, parseInt(matches1[0])]);
			});
		}else{
			this.data.forEach(function(value, key){
				setData.push([value[0], 0]);
			});
			this.data1.forEach(function(value, key){
				setData1.push([value[0], 0]);
			});
		}
		this.data   =   setData;
		this.data1   =   setData1;
	}
  ngOnChanges(changes: SimpleChanges) {
	  console.log('calling setdata');
	  this.setData();
		// You can also use categoryId.previousValue and
		// categoryId.firstChange for comparing old and new values
	}

}
