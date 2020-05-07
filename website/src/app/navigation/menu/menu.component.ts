import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];
  menuOpen: boolean = false;
  @Output() open = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.menuItems = menu;
  }

  toggleMenu(): void{
    this.menuOpen = !this.menuOpen;
    this.open.emit(this.menuOpen);
  }

}

const menu: MenuItem[] = [
  {link: '/', fragment: 'home', title: 'Home'},
  {link: '/', fragment: 'intro', title: 'Introduction'},
  {link: '/', fragment: 'endorsement', title: 'Endorsements'},
  {link: '/', fragment: 'skills', title: 'Skills'},
  {link: '/', fragment: 'history', title: 'Work History'}
];
