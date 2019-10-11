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
  selected_board:any;
  constructor(private router:Router, private persister: PersistanceService,private route: ActivatedRoute,private service:ProjectDetailService) { }

  ngOnInit() {
    let that=this;
    that.route.paramMap.subscribe(params => {
      let param1 = this.route.snapshot.paramMap.get("module_id");
      that.submodules=that.persister.get('SelectedModules')[param1];
      this.selected_board=this.persister.get('boardsData').find((x: { id: any; }) => x.id==this.persister.get('selectedBoard'))
      this.persister.set('selected_submodules',that.submodules)
    });
    this.router.navigate(['/dashboard']);
  }

}
