import { trigger, style, transition, animate, stagger, query, sequence, group } from '@angular/animations';


export const navAnimations = [
    trigger('nav', [
        transition(':enter', [
            query('.logo, .btn', [
                style({ opacity: 0 }),
            ]),
            query('.nav-item', [
                style({ opacity: 0, transform: 'translateY(-100px)' }),
                stagger(-200, [
                    animate('1700ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                ])
            ]),
            group([
                query('.btn', [
                    animate('900ms linear', style({ opacity: 1 }))
                ]),
                query('.logo', [
                    animate('900ms linear', style({ opacity: 1 }))
                ])
            ])
        ])
    ])
]