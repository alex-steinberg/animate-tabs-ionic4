import { Component } from '@angular/core';
import { UiService } from '../../providers/ui/ui.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private uiService: UiService) {}

  startRootNav(): void {
    this.uiService.announceNavStart();
  }
  endRootNav(): void {
    this.uiService.announceNavEnd();
  }
}
