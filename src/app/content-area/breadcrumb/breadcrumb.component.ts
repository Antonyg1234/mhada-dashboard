import { Component, OnInit, Input } from '@angular/core';
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
  public selected_board_name:string;
  public selected_sub_module:string;
  public page_type:string = "";
  @Input() selectedProjectId:number;
  @Input() selected_project:string="";

  constructor(private route: ActivatedRoute, private persister: PersistanceService, private router: Router,private persistanceService:PersistanceService) { }

  ngOnInit() {
	  console.log("insode breadcrumbs",this.selectedProjectId);
    this.href = this.router.url;
    let that = this;
    this.route.paramMap.subscribe(params => {
    	//console.log(params);
	    let submodule   =   this.persister.get('selected_submodules');
	    if( submodule && ('display_name' in submodule)){
		  //this.selected_sub_module  =
		    this.selected_sub_module =   submodule.display_name;
	    }

    	if(this.href.includes('/projects')) {
		    let board_id = params.get("board_id");
		    this.selected_board = that.persister.get('boardsData').find(x => x.id == board_id);
	    }else{
		    let board_id = that.persister.get("selectedBoard");
		    this.selected_board = that.persister.get('boardsData').find(x => x.id == parseInt(board_id));
	    }

	    if(this.href == '/boards'){
		    this.dash_name = 'Boards';
		    this.page_type = 'boards';
	    }else if(this.href.includes('/projects')){
		    this.dash_name = this.selected_board['description'];
		    this.page_type = 'projects';
		    this.selected_board_name    =    this.selected_board['description'].replace('Board','');
		    this.board_id = this.persistanceService.get('selectedBoard');
	    }else if(this.href.includes('/modules')){
		    this.selected_project   =   this.persister.get('selected_project');
		    this.dash_name = this.selected_board['description'];
		    this.page_type = 'modules';
		    this.board_id = this.persistanceService.get('selectedBoard');
		    this.selected_board_name    =    this.selected_board['description'].replace('Board','');
	    }else if(this.href.includes('/sub_module')){
		    this.selected_project   =   this.persister.get('selected_project');
		    this.dash_name = this.selected_board['description'];
		    this.page_type = 'sub_module';
		    this.board_id = this.persistanceService.get('selectedBoard');
		    this.selected_board_name    =    this.selected_board['description'].replace('Board','');
	    }else if(this.href.includes('/dashboard')){

	    	this.selected_project   =   this.persister.get('selected_project');
		    this.dash_name = this.selected_board['description']+" - "+this.selected_project;
		    this.page_type = 'dashboard';
		    this.board_id = this.persistanceService.get('selectedBoard');
		    this.selected_board_name    =    this.selected_board['description'].replace('Board','');
	    }
    });
  }
}
