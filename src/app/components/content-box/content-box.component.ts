import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';



export const scrollAnimation = trigger('scrollAnimation', [
  state('show', style({
    opacity: 1,
    transform: "translateX(0)"
  })),
  state('hide',   style({
    opacity: 0,
    transform: "translateX(-100%)"
  })),
  transition('show => hide', animate('1s cubic-bezier(.55,0,.1,1)')),
  transition('hide => show', animate('1s cubic-bezier(.55,0,.1,1)'))
]);

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss'],
  animations: [ scrollAnimation ],
  host: {
    '[@scrollAnimation]': ''
  },
})


export class ContentBoxComponent implements OnInit {

  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop;
      console.log('component position ' + componentPosition);
      
      const scrollPosition = window.pageYOffset + 150;
      console.log('scroll position ' + scrollPosition);
      

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

  ngOnInit() {
  }

}
