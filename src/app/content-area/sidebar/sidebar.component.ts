import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarStatus: boolean = false;
  constructor() { }
  @Output() sidebarEvent = new EventEmitter();

  sidebarActive(){
    this.sidebarStatus = !this.sidebarStatus;
    this.sidebarEvent.emit(this.sidebarStatus);
    console.log('acccccccc');
  }

  ngOnInit() {
  }

}
