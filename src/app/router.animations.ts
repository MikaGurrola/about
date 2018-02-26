import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [
  // when transitioning FROM any state T0 any state
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
    // query(':enter', style({ transform: 'translateX(100%)' })),
    query(':leave', animateChild()), 
    sequence([
      group([
        query(':leave', [
          style({ opacity: ' 1' }),
          animate('0.75s cubic-bezier(.75,-0.48,.26,1.52)', 
          style({ opacity: ' 0' }))
        ],
        { optional: true }),
        query(':enter', [
          style({ opacity: '0' }),
          animate('0.75s cubic-bezier(.75,-0.48,.26,1.52)', 
          style({ opacity: '1' }))
        ],
        { optional: true }),
      ]),
    ]),
    query(':enter', animateChild()),
  ])
]);