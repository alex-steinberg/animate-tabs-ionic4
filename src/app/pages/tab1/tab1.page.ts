import { Component, OnDestroy } from '@angular/core';
import { ContentFadeState, UiService } from '../../providers/ui/ui.service';
import { animations } from '../tabs/tabs.animations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations,
})
export class Tab1Page implements OnDestroy{
  contentFade = ContentFadeState.NAVIGATED;
  contentFade$ = this.uiService.contentFade$.subscribe(fadeState => this.contentFade = fadeState);
  constructor(
      private uiService: UiService,
  ) {}

  ngOnDestroy(): void {
    this.contentFade$.unsubscribe();
  }
}
