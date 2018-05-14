import { Component, enableProdMode, OnInit } from '@angular/core';
import 'devextreme/integration/jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
    }
    onClick(e) {
        console.log(e);
    }

    OnInit() {}
}
