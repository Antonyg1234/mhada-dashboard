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
  selected_board_id:number=0;
  selected_board:any;
  constructor(private persister: PersistanceService, private route: ActivatedRoute, private service: ProjectDetailService) { }

  ngOnInit() {
	  let that = this;
	  this.route.paramMap.subscribe(params => {
		  let board_id = params.get("board_id");
		  that.persister.set('selectedBoard',board_id);
		  that.getList(board_id);
		  that.selected_board_id    =     parseInt(board_id);
    });
    this.selected_board=this.persister.get('boardsData').find(x=>x.id==this.persister.get('selectedBoard'))
    //console.log(this.selected_board.large_icon)
  }

  getList(board_id): void {
    this.service.getList(board_id)
      .subscribe(projects => (this.projects = projects['data']));
  }

}
