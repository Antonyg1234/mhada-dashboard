import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { BoardDetail, BoardDetailService } from './../views/board-detail/board-detail.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarStatus: boolean = false;
  boardsnav:BoardDetail[];

  constructor(private service:BoardDetailService) { }

  @Output() sidebarEvent = new EventEmitter();

  sidebarActive(){
    this.sidebarStatus = !this.sidebarStatus;
    this.sidebarEvent.emit(this.sidebarStatus);
    console.log('acccccccc');
  }


  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.service.getList()
      .subscribe(boards => (this.boardsnav = boards['data']));

  }

}
