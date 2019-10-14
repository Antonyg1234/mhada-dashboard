import { Component, OnInit } from '@angular/core';
import { PersistanceService } from './../../services/persistanceService.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public href: string = "";
  public dash_name: string = "";
  public board_id: number;
  public selected_board:string;
  public page_type:string = "";
  selected_board_id: number;
  constructor(private route: ActivatedRoute, private persister: PersistanceService, private router: Router,private persistanceService:PersistanceService) { }

  ngOnInit() {
    this.href = this.router.url;
    let that = this;
	  this.route.paramMap.subscribe(params => {
      let board_id = params.get("board_id");
      that.selected_board_id    =     parseInt(board_id);
      that.selected_board=that.persister.get('boardsData').find(x=>x.id==board_id);
    })

    if(this.href == '/boards'){
      this.dash_name = 'Boards';
      this.page_type = 'boards';
    }else if(this.href.includes('/projects')){
      this.dash_name = this.selected_board['description'];
      this.page_type = 'projects';
    }else if(this.href.includes('/modules')){
      this.dash_name = this.selected_board['description'];
      this.page_type = 'modules';
      this.board_id = this.persistanceService.get('selectedBoard');
    }else if(this.href.includes('/dashboard')){
      this.dash_name = this.selected_board['description'];
      this.page_type = 'dashboard';
      this.board_id = this.persistanceService.get('selectedBoard');
    }
  }

}
