import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetailService } from '../views/project-detail/project-detail.service';
import { PersistanceService } from './../../services/persistanceService.service';

@Component({
  selector: 'app-sub-modules',
  templateUrl: './sub-modules.component.html',
  styleUrls: ['./sub-modules.component.css'],
  providers:[ProjectDetailService]
})
export class SubModulesComponent implements OnInit {
  submodules:[];
  selected_module:any;
  public dashboard_url;
  selected_board:any;
  module_id:any;
  selected_project_id:any;
  project_name:any;
  constructor(private router:Router, private persister: PersistanceService,private route: ActivatedRoute,private service:ProjectDetailService) { 
    const naviation = this.router.getCurrentNavigation();
    this.dashboard_url=naviation.extras.state;
    //console.log('subModule',this.dashboard_url)
  }

  ngOnInit() {
    let that=this;
    that.route.paramMap.subscribe(params => {
      let param1 = this.route.snapshot.paramMap.get("module_id");
      //console.log('Module Id',param1)
      that.module_id = param1;
      that.submodules=that.persister.get('SelectedModules')[param1];
      this.selected_board=this.persister.get('boardsData').find((x: { id: any; }) => x.id==this.persister.get('selectedBoard'))
      this.persister.set('selected_submodules',that.submodules)
      this.persister.set('selected_project',this.dashboard_url['project_name']);
      //console.log('submodule',this.dashboard_url['project_name'])
      this.selected_project_id=this.dashboard_url['selected_project_id'];
      this.project_name=this.dashboard_url['project_name'];
    });
    this.router.navigate(['/dashboard'],{state:{ selected_project_id:this.selected_project_id,module_id: this.module_id,selected_project:this.dashboard_url['project_name'],project_name:this.dashboard_url['project_name'] }});
  }

}
