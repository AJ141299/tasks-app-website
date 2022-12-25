import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from './state/app.state';
import { AddCollectionStatus } from './state/models/ui.models';
import { selectAddingCollection, selectBlockScreen } from './state/selectors/ui.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('blockScreenTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class AppComponent {
  addCollectionStatus$ = this.store.select(selectAddingCollection).pipe(
    map((addCollectionStatus) => addCollectionStatus == AddCollectionStatus.Pending)
  );
  blockScreen$ = this.store.select(selectBlockScreen);

  constructor(private store: Store<AppState>) {}
}
