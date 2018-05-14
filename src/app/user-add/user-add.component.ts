import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  @Input() childMessage: boolean;
  addClientVisible = this.childMessage;
  constructor() { }

  ngOnInit() {
    alert(this.childMessage);
  }

}
