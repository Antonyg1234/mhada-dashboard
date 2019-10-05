import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DashboardDetail, ProjectDetailService } from '../project-detail/project-detail.service';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css'],
  providers:[ProjectDetailService]
})
export class DashboardDetailComponent implements OnInit {
  dashboard:DashboardDetail[];
  public dashboard_url;
  constructor(private router: Router,private route: ActivatedRoute,private service:ProjectDetailService) {
    const naviation = this.router.getCurrentNavigation();
    this.dashboard_url=naviation.extras.state;
   }

  ngOnInit() {
   // this.getDashboardList(this.dashboard_url);
  }

  getDashboardList(url): void {
    this.service.getDashboardList(url)
      .subscribe(dashboard => (console.log(dashboard['data'])));
  }

}
