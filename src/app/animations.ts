import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-out', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
)
// reuseable animation - fadeInAnimation
export let fadeInAnimation = animation([
    style({ background: '#18B6FD', opacity: 0}),
    animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

// reuseable animation - fadeOutAnimation
export let fadeOutAnimation = animation([
    animate(1000, style({opacity: 0}))
]);

export let fade =   trigger('fade', [

    transition(':enter', // void => *, * => void, * <=> void
        useAnimation(fadeInAnimation)
    ),

    transition(':leave',
        useAnimation(fadeOutAnimation)
    )
  ]);

export let slide = trigger('slide',[
    transition(':enter',[
        style({transform: 'translateX(-10px)'}),
        animate(500)
    ]),

    transition(':leave',
        useAnimation(bounceOutLeftAnimation)
    )
]);
