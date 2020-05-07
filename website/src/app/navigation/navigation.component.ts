import { Component, OnInit , HostListener, Inject, EventEmitter, Output } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  isSticky: boolean = false;
  shift: boolean;
  @Output() menuOpen = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 80;
  }

  triggerShift(open: boolean): void{
    this.menuOpen.emit(open);
    this.shift = open;
    console.log(this.shift);
  }

}
