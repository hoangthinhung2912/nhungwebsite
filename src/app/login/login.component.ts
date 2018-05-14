import { Component, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';
import { Routes } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {Http, Headers, RequestOptions } from '@angular/http';
import { Token } from '@angular/compiler';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formInstance: any;
  token: any;

  constructor(private router: Router, private http: Http ) {
   }

  onContentReady(e) {
    const ele = document.getElementsByTagName('input');
    ele[0].classList.add('myInput');
    ele[0].setAttribute('placeholder', 'username');
    ele[1].classList.add('myInput');
    ele[1].setAttribute('placeholder', 'password');
  }

  ngOnInit() {
    // document.getElementById('addUser').style.display = 'none';
  }

  onFormInit(e) {
    this.formInstance = e.component;
  }

  Register() {
    const isRegister = true;
  }

  setSession(token: any) {
        localStorage.setItem('token', token);
  }

  login() {
    const result = this.formInstance.validate();
    const username = this.formInstance.getEditor('username').option('value');
    const password = this.formInstance.getEditor('password').option('value');

    if (result.isValid) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization', `Basic dXNlcjoxMjM=`);
      const body = 'Username=' + username + '&Password=' + password;
      this.http.post('http://localhost:50449/api/Login', body, {headers: headers})
      .subscribe((data) => {
        console.log(data['ok']);
        this.token = JSON.parse(data['_body']);
        console.log(data);
        this.setSession(this.token);
        if (data['_body'] !== null) {
        //   const header = new Headers();
        //   header.append('Content-Type', 'application/json');
        //   header.append('Authorization', `Bearer ` + this.token);
        //   this.http.get('http://localhost:50449/api/Login',  {headers: header}).subscribe(data => {
        // console.log(data);
        // });
          this.router.navigate(['/company']);
        } else {

        }
      });
  }
  }
}

