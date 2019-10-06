import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectDetail, ProjectDetailService } from './project-detail.service';
import { PersistanceService } from './../../../services/persistanceService.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers:[ProjectDetailService]
})

export class ProjectDetailComponent implements OnInit {
  projects:ProjectDetail[];
  constructor(private persister: PersistanceService, private route: ActivatedRoute,private service: ProjectDetailService) { }

  ngOnInit() {
      let board_id = this.route.snapshot.paramMap.get("board_id");
      this.persister.set('selectedBoard',board_id);
	  this.getList(board_id);
  }

  getList(board_id): void {
    this.service.getList(board_id)
      .subscribe(projects => (this.projects = projects['data']));
  }

}
