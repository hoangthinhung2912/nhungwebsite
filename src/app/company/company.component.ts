import { Component, OnInit, ViewChild } from '@angular/core';
import { Element } from '../Element';
import { HeaderManagerPageComponent } from '../header-manager-page/header-manager-page.component';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  message: string;
  listAction = ['Post', 'Information', 'Company'];
  token = localStorage.getItem('token');
  @ViewChild(HeaderManagerPageComponent) child;

  constructor(private router: Router) {
  }

  openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    this.message = this.child.message;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }
   ngOnInit() {
     if (this.token === null) {
      this.router.navigate(['/login']);
     }
  }

}

