import { trigger, state, transition, style, animate, keyframes, animation, useAnimation, query, animateChild, group, stagger } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse',[
    state('collapsed', style({
      height: 0,
      overflow: 'hidden',
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    })),

    // even though we dont need to specify the expanded state as all the styles are undone on change of state and it will work fine without this code block
    state('expanded', style({
      height: '*',
      overflow: 'auto',
      padding: '*'
    })),

    transition('collapsed => expanded', [
      animate('300ms ease-out', style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*'
      })),
      animate(1000,style({opacity: 1}))
    ]),

    transition('expanded => collapsed', [
      animate('300ms ease-in')
    ])

  ])
