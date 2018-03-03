import { Component, OnInit } from '@angular/core';
import { trigger, stagger, animate, style, group, query as q, transition, keyframes } from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);


export const pageTransition = trigger('pageTransition', [
  transition(':enter', [
    query('.animate', style({ opacity: 0 })),
    query('.animate', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('.animate', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ])),        
  ])
]);

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  animations: [ pageTransition ],
  host: {
    '[@pageTransition]': ''
  },
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
