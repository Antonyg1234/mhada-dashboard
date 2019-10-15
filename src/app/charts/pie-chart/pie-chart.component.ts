import { Component, OnInit, ChangeDetectorRef, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { PersistanceService } from './../../services/persistanceService.service';
import { DashboardDetail} from '../../content-area/views/project-detail/project-detail.service';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {

	@Input() dashboardDetails: DashboardDetail[] ;
	private _dashboardDetails: DashboardDetail[] ;
	title = '';
	type = 'PieChart';
	graphData   =   [];
	data = [];
	columnNames = ['Browser', 'Percentage'];
	options = {
	};
	width = 550;
	height = 400;

  constructor(private cdRef: ChangeDetectorRef, private persister: PersistanceService) {
  }

	ngOnChanges(changes: SimpleChanges) {
		const name: SimpleChange = changes.dashboardDetails;
		console.log('prev value: ', name.previousValue);
		console.log('got name: ', name.currentValue);
		this._dashboardDetails = name.currentValue;
		this.setData();
	}

	ngOnInit() {
	  this._dashboardDetails    =   this.dashboardDetails;
	  this.setData();
    }

  setData() {
  	let that = this;
	  that.data   =   [];
	  that._dashboardDetails.forEach(function(data1, item){
		  that.data.push([data1['title'], parseFloat(data1['count'])]);
	  });
  }
}


