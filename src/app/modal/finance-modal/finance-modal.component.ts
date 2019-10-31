import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finance-modal',
  templateUrl: './finance-modal.component.html',
  styleUrls: ['./finance-modal.component.css']
})
export class FinanceModalComponent implements OnInit {
   @Input() finance_name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
