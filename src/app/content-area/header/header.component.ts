import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Token: TokenService, private router: Router) { }

  loggout(){
    this.Token.remove();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
