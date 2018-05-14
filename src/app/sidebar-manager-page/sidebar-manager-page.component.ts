import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-sidebar-manager-page',
  templateUrl: './sidebar-manager-page.component.html',
  styleUrls: ['./sidebar-manager-page.component.css']
})
export class SidebarManagerPageComponent implements OnInit {
 
  @Input() childMessage: string[];  
  constructor() { 
  
  }

  openTab(evt, cityName) {
    let i, tabcontent, tablinks;
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

  RemoveTabElement() {
    let elementParent = document.getElementById('action');
    let elementBtn = document.getElementsByClassName('tablinks');
    for (let i = this.childMessage.length; i < elementBtn.length; i++) {
      elementBtn[i].parentNode.removeChild(elementBtn[i]);
    }
  }

  ngOnInit() {  
    this.RemoveTabElement();
  }

  ngAfterViewInit() {
    
  }

}
