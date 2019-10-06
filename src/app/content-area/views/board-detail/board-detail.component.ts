import { Component, OnInit } from '@angular/core';
import { BoardDetail, BoardDetailService } from './board-detail.service';
import { PersistanceService } from './../../../services/persistanceService.service';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css'],
  providers:[BoardDetailService]
})
export class BoardDetailComponent implements OnInit {
  boards:BoardDetail[];

  constructor(private service:BoardDetailService, private persister: PersistanceService) { }

  ngOnInit() {
	  this.persister.set('selectedBoard',0);
	  this.getList();
  }

  getList(): void {
    this.service.getList()
	    .subscribe(boards => {
		    this.persister.set('boardsData', boards['data']);
		    this.boards = boards['data'];
	    });
  }

}
