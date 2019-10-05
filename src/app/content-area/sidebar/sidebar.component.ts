import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { BoardDetail, BoardDetailService } from './../views/board-detail/board-detail.service';
import { PersistanceService } from './../../services/persistanceService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[PersistanceService]
})
export class SidebarComponent implements OnInit {
  public sidebarStatus: boolean = false;
  public boardsnav:BoardDetail[]  =  [];

  constructor(private service:BoardDetailService, private persister: PersistanceService) { }

  @Output() sidebarEvent = new EventEmitter();

  sidebarActive(){
    this.sidebarStatus = !this.sidebarStatus;
    this.sidebarEvent.emit(this.sidebarStatus);
    console.log('acccccccc');
  }


  ngOnInit() {
    console.log(this.boardsnav);
    console.log(this.sidebarStatus);
    this.getList();
  }

  getList(): void {
    let that = this;
    this.service.getList()
      .subscribe(boardsnavdata => (that.persister.set('boardsData', boardsnavdata['data'])
      ));

  }

}
