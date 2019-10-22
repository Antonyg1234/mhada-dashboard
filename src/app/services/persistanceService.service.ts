import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
	private getAllBoards: () => void;
	private boardChange: () => void;
	constructor() {}

	onBoardDataSetHappended(fn: () => void) {
		if(typeof this.getAllBoards   ==  "undefined" ) {
			this.getAllBoards = fn;
		}
	}

	onBoardChangeHappended(fn: () => void) {
		if(typeof this.boardChange   ==  "undefined" ) {
			this.boardChange = fn;
		}
	}

  set(key: string, data: any): void {
    try {
      //console.log('persister key ', key);
    	localStorage.setItem(key, JSON.stringify(data));
      if(key == 'boardsData'){
      	this.getAllBoards();
      }
	  if(key == 'selectedBoard'){
      	//console.log('selectedBoard called');
      	this.boardChange();
	  }
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
	    if (localStorage.getItem(key) === null) {
		    return null;
	    }else {
		    return JSON.parse(localStorage.getItem(key));
	    }
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
