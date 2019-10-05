import { Component, OnInit } from '@angular/core';
import { BoardDetail, BoardDetailService } from './board-detail.service';


@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css'],
  providers:[BoardDetailService]
})
export class BoardDetailComponent implements OnInit {
  boards:BoardDetail[];

  constructor(private service:BoardDetailService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.service.getList()
      .subscribe(boards => (
        this.boards = boards['data']
      ));

  }


}
