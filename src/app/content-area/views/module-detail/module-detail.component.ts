import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleDetail, ProjectDetailService } from '../project-detail/project-detail.service';
import { PersistanceService } from './../../../services/persistanceService.service';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.css'],
  providers:[ProjectDetailService]
})
export class ModuleDetailComponent implements OnInit {
  modules:ModuleDetail[];
  selected_board:any;
  constructor(private persister: PersistanceService,private route: ActivatedRoute,private service:ProjectDetailService) { }

  ngOnInit() {
    let param1 = this.route.snapshot.paramMap.get("project_id");
    console.log(param1)
    this.getModulesList(param1);
    this.selected_board=this.persister.get('boardsData').find((x: { id: any; }) => x.id==this.persister.get('selectedBoard'))
    //console.log(this.selected_board)
    
  }

  getModulesList(project_id): void {
    this.service.getModuleList(project_id)
      .subscribe(modules => {
        this.modules = modules['data'];
        this.persister.set('SelectedModules',this.modules);
      });
  }

}
