import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinancialDetail,FinancialService } from './../../../services/financial.service';
import { PersistanceService } from './../../../services/persistanceService.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FinanceModalComponent } from '../../../modal/finance-modal/finance-modal.component';
@Component({
  selector: 'app-finance-detail',
  templateUrl: './finance-detail.component.html',
  styleUrls: ['./finance-detail.component.css'],
  //providers:[PersistanceService]
})
export class FinanceDetailComponent implements OnInit {
  finance: FinancialDetail[] = [{budgetType:'Receipt',amount:'0',values:{}},{budgetType:'Payment',amount:'0',values:{}}] ;
  selected_board_id:number=0;
  selected_board:any;
  board_name:string='';

  constructor(private modalService: NgbModal,private financialService: FinancialService,private route: ActivatedRoute, private persister: PersistanceService) {

  }

  ngOnInit() {
    let that = this;

	  this.route.paramMap.subscribe(params => {
      that.selected_board=that.persister.get('boardsData').find(x=>x.id==that.persister.get('selectedBoard'));
      //that.comman_name = that.selected_board['common_name'];
      if(typeof that.selected_board === 'undefined'){
        this.board_name = 'All Boards';
        that.financialService.getFinancialDetail('Mumbai Board')
        .subscribe(finance_details => {
          that.finance = finance_details['data']
        });
      }else{
        this.board_name = that.selected_board['description'];
        that.financialService.getFinancialDetail(that.selected_board['common_name'])
        .subscribe(finance_details => {
          that.finance = finance_details['data']
        });
      }


    });

  }

  openModal(data,title:string) {
    const modalRef = this.modalService.open(FinanceModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.list_data = data;
  }

}
