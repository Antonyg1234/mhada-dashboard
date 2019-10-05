import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from './login.service';
import {NgModule} from '@angular/core';
import { environment } from '../../environments/environment';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
    public form ={
        email:null,
        password:null
    }
    public error = null;
    url = environment.apiUrl+'/oauth/token';
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private Token: TokenService,
        private Auth: AuthService,
        private loginservice:LoginService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    onSubmit() { console.log(this.url); 
        this.submitted = true;

        this.loginservice.login(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
          );

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        
      
    }
    handleResponse(data) {
        this.Token.handle(data.access_token);
        this.Auth.changeAuthStatus(true);
        console.log('test');
        this.router.navigateByUrl('/boards');
      }
    
      handleError(error) {
        this.error = error.error.error;
      }

}
