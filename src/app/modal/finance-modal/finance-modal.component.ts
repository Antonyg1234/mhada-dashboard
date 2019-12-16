import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finance-modal',
  templateUrl: './finance-modal.component.html',
  styleUrls: ['./finance-modal.component.css']
})
export class FinanceModalComponent implements OnInit {
   @Input() finance_name;
	@Input() list_data;
	@Input() title;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
