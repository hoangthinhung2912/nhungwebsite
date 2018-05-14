import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-manager-page',
  templateUrl: './header-manager-page.component.html',
  styleUrls: ['./header-manager-page.component.css']
})
export class HeaderManagerPageComponent implements OnInit {
  message = 'nhung xinh dep';
  constructor() { }

  ngOnInit() {
  }

}
