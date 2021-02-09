
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animateChild,
  query,
  group,
  // ...
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave',  [
        style({
          position: 'absolute',
          width:'100%',
        })
      ], {optional: true}),
      query(':enter', [
        style({ opacity:0, transform: "translateY(-100%)", })
      ], {optional: true}),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ transform: "translateY(100%)", opacity:0, width:'80%',  }))
        ], {optional: true}),
        query(':enter', [
          animate('750ms ease-out', style({ transform: "translateY(0)", opacity:1, width:'99%', }))
        ], {optional: true})
      ]),


    ]),

  ]);
