import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DashboardDetail, ProjectDetailService } from '../project-detail/project-detail.service';
import { PersistanceService } from './../../../services/persistanceService.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../../modal/modal.component';


@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css'],
  providers:[ProjectDetailService]
})
export class DashboardDetailComponent implements OnInit {
  dashboard:DashboardDetail[];
  public dashboard_url;
  public Object = Object;
  submodules: any;
  public href: string = "";
  public dash_name: string = "";
  public board_id: number;
  public selected_board:string;
  public selected_module:string="";

  constructor(private modalService: NgbModal,private persister: PersistanceService,private router: Router,private route: ActivatedRoute,private service:ProjectDetailService) {
    const naviation = this.router.getCurrentNavigation();
    this.dashboard_url=naviation.extras.state;
    
    this.submodules=this.persister.get('selected_submodules');
    this.selected_module=this.persister.get('selected_submodules');
   }

  ngOnInit() {
    this.href = this.router.url;
    let that = this;
      this.route.paramMap.subscribe(params => {
        let board_id = that.persister.get("selectedBoard");
        this.persister.set('selected_project',this.dashboard_url['project_name']);
        this.selected_board = that.persister.get('boardsData').find(x => x.id == parseInt(board_id));
      });
     if(this.dashboard_url===undefined)
     {
      
      this.dashboard_url={url:this.submodules.data[0].url};
     }
    this.getDashboardList(this.dashboard_url);
  }

  getDashboardList(url): void {
    this.service.getDashboardList(url)
      .subscribe(dashboard => this.dashboard=dashboard['data']);
  }

  setUrl(url){
    let final_url={url:url}
	this.getDashboardList(final_url);
  }

  open(data,title) {
    //console.log(data);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = title;
    modalRef.componentInstance.list_data = data;
  }

}
