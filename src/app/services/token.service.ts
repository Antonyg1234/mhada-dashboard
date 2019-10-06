import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
	private loginStateChange: () => void;
	private loginStateChangeForHeader: () => void;

	private iss = {
    login: 'http://127.0.0.1:8000/api/login',
    signup: 'http://127.0.0.1:8000/api/signup'
  };

  constructor() { }

	onChangeHappended(fn: () => void) {
		if(typeof this.loginStateChange   ==  "undefined" ) {
			this.loginStateChange = fn;
		}
	}
	onChangeHappendedForHeader(fn: () => void) {
		if(typeof this.loginStateChangeForHeader   ==  "undefined" ) {
			this.loginStateChangeForHeader = fn;
		}
	}

  handle(token) {
    this.set(token);
	this.loginStateChange();
	this.loginStateChangeForHeader();
  }

  set(token) {
    localStorage.setItem('token', token);
    this.loginStateChange();
    this.loginStateChangeForHeader();
  }
  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
	  this.loginStateChange();
	  this.loginStateChangeForHeader();
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    //return this.isValid();
    return localStorage.getItem('token') != null;
  }
}
