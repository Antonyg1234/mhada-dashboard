import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import {Router} from '@angular/router';
import { BoardDetail, BoardDetailService } from './../views/board-detail/board-detail.service';
import { PersistanceService } from './../../services/persistanceService.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public sidebarStatus: boolean = false;
  public activeBoardId: number = 0;
  public boardsnav: BoardDetail[]  =  [];
  public isLoggedIn: boolean = false;

  constructor(private Token: TokenService, private service: BoardDetailService, private persister: PersistanceService, private ref: ChangeDetectorRef) {

  }

  @Output() sidebarEvent = new EventEmitter();

  sidebarActive() {
    this.sidebarStatus = !this.sidebarStatus;
    this.sidebarEvent.emit(this.sidebarStatus);
  }

  ngOnInit() {
  	console.log(this.Token.get());
	  this.isLoggedIn   =   this.Token.get() ? true : false;
	  this.persister.onBoardDataSetHappended(this.getList.bind(this));
	  this.persister.onBoardChangeHappended(this.setActiveBoard.bind(this));
	  this.Token.onChangeHappended(this.setLoginStatus.bind(this));

	  let data = this.persister.get('boardsData');
	  this.boardsnav    =   (data) ? data : [];
	  let selectedBoard =   this.persister.get('selectedBoard');
	  this.activeBoardId  =  selectedBoard?selectedBoard:0;
	    //    this.getList();
  }

  getList(): void {
	  this.boardsnav = this.persister.get('boardsData');
	}

  setLoginStatus(): void {
	this.isLoggedIn  =  this.Token.get() ? true : false;
  }

  setActiveBoard(): void {
	this.activeBoardId  =  this.persister.get('selectedBoard');
	}

}
