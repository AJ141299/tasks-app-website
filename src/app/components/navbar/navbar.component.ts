import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showSideBar: boolean = false;

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }
}
