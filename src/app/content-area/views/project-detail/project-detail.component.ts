import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectDetail, ProjectDetailService } from './project-detail.service';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers:[ProjectDetailService]
})
export class ProjectDetailComponent implements OnInit {
  projects:ProjectDetail[];
  constructor(private route: ActivatedRoute,private service:ProjectDetailService) { }

  ngOnInit() {
    let param1 = this.route.snapshot.paramMap.get("board_id");
    console.log(param1);
    this.getList(param1);
  }

  getList(board_id): void {
    this.service.getList(board_id)
      .subscribe(projects => (this.projects = projects['data']));
  }

}
