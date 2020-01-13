import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export enum ContentFadeState {
  NAVIGATED = 'navigated',
  NAVIGATING = 'navigating'
}

@Injectable({
  providedIn: 'root'
})
export class UiService {

  contentState = new BehaviorSubject<ContentFadeState>(ContentFadeState.NAVIGATED);
  contentFade$ = this.contentState.asObservable();

  constructor() { }
  announceNavStart() {
    this.contentState.next(ContentFadeState.NAVIGATING);
  }
  announceNavEnd() {
    this.contentState.next(ContentFadeState.NAVIGATED);
  }

}
