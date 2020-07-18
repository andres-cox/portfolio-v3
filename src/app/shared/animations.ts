import { trigger, style, transition, animate, stagger, query, sequence, group, state } from '@angular/animations';


export const navAnimations = [
    trigger('nav', [
        transition(':enter', [
            query('.logo, .btn', [
                style({ opacity: 0 }),
            ]),
            query('.nav-item', [
                style({ opacity: 0, transform: 'translateY(-100px)' }),
                stagger(-200, [
                    animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                ])
            ]),
            group([
                query('.btn', [
                    animate('800ms linear', style({ opacity: 1 }))
                ]),
                query('.logo', [
                    animate('800ms linear', style({ opacity: 1 }))
                ])
            ])
        ])
    ])
]

export const introAnimations = [
    trigger('intro', [
        transition(':enter', [
            query('h5, h1, p', [
                style({ opacity: 0 }),
            ]),
            query('h5, h1, p', [
                stagger(300, [
                    animate('1000ms 2600ms ease-in', style({ opacity: 1 }))
                ])
            ])
        ])
    ])
]

export const socialAnimations = [
    trigger('social', [
        transition(':enter', [
            query('.social__link', [
                style({ opacity: 0, transform: 'translateX(-100px)' }),
                stagger(350, [
                    animate('700ms 3600ms ease-in',
                        style({ opacity: 1, transform: 'none' })
                    )
                ])
            ]),
        ])
    ])
]

export const aboutAnimations = [
    trigger('about', [
        transition(':enter', [
            query('.container', [
                style({ opacity: 0 }),
                animate('1700ms linear',
                    style({ opacity: 1 })
                )
            ]),
        ])
    ])
]

export const menutest = [
    trigger('fadeIn', [
        state('inactive', style({
            opacity: "0"
        })),
        state('active', style({
            opacity: "1"
        })),
        transition('inactive <=> active', animate('500ms ease-in'))
    ])
]

export const animations = [
    trigger('fadeLeft', [
        state('inactive', style({
            opacity: "0", transform: 'translateX(-100px)'
        })),
        state('active', style({
            opacity: "1", transform: 'none'
        })),
        transition('inactive <=> active', animate('500ms ease-in'))
    ]),
    trigger('fadeRight', [
        state('inactive', style({
            opacity: "0", transform: 'translateX(100px)'
        })),
        state('active', style({
            opacity: "1", transform: 'none'
        })),
        transition('inactive <=> active', animate('500ms ease-in'))
    ])
]