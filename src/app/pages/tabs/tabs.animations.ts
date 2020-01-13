import { animate, state, style, transition, trigger } from '@angular/animations';
import { ContentFadeState } from '../../providers/ui/ui.service';

export const animations = [
    trigger('contentFade', [
        state(ContentFadeState.NAVIGATED, style({
            opacity: 1
        })),
        state(ContentFadeState.NAVIGATING, style({
            opacity: 0
        })),
        transition(`${ContentFadeState.NAVIGATED} <=> ${ContentFadeState.NAVIGATING}`, [
            animate('20ms ease-in-out', style({}))
        ])
    ])
];
