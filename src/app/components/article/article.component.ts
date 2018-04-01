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
    transform: "translateY(0)"
  })),
  state('hide',   style({
    opacity: 0,
    transform: "translateY(100%)"
  })),
  transition('show => hide', animate('1s cubic-bezier(.55,0,.1,1)')),
  transition('hide => show', animate('1s cubic-bezier(.55,0,.1,1)'))
]);

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [ scrollAnimation ],
  host: {
    '[@scrollAnimation]': ''
  },
})
export class ArticleComponent implements OnInit {

  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop;
      // console.log('component position ' + componentPosition);
      
      const scrollPosition = window.pageYOffset + 400;
      // console.log('scroll position ' + scrollPosition);
      

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

  ngOnInit() {
  }

}
