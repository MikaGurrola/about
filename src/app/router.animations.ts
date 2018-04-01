import {sequence, trigger, stagger, animate, style, group, query, transition, keyframes, animateChild} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  // when transitioning FROM any state T0 any state
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' }), {optional:true}),
    query(':leave', animateChild(), {optional:true}), 
    query(':enter', animateChild(), {optional:true}),
    
  ])
]);