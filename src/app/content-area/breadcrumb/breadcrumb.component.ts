import { Component, OnInit } from '@angular/core';
import { PersistanceService } from './../../services/persistanceService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public href: string = "";
  public dash_name: string = "";
  public board_id: number;

  public page_type:string = "";
  constructor(private router: Router,private persistanceService:PersistanceService) { }

  ngOnInit() {
    this.href = this.router.url;

    if(this.href == '/boards'){
      this.dash_name = 'Boards';
      this.page_type = 'boards';
    }else if(this.href.includes('/projects')){
      this.dash_name = 'Projects';
      this.page_type = 'projects';
    }else if(this.href.includes('/modules')){
      this.dash_name = 'Modules';
      this.page_type = 'modules';
      this.board_id = this.persistanceService.get('selectedBoard');
    }else if(this.href.includes('/dashboard')){
      this.dash_name = 'Dashboard';
      this.page_type = 'dashboard';
      this.board_id = this.persistanceService.get('selectedBoard');
    }
  }

}
