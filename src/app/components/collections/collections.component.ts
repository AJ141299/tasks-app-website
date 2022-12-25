import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCollectionsFromLocalStorage } from 'src/app/helpers/helpers';
import { addCollectionStatus, createCollection, loadCollections } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { AddCollectionStatus, Collection } from 'src/app/state/models/ui.models';
import { selectAllCollections } from 'src/app/state/selectors/ui.selectors';

@Component({
  selector: 'collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10%)' }),
        animate('200ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class CollectionsComponent {
  allCollections$ = this.store.select(selectAllCollections);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    loadCollectionsFromLocalStorage(this.store);
  }
  
  addCollection() {
    this.store.dispatch(addCollectionStatus({addCollectionStatus: AddCollectionStatus.Pending, blockScreen: true}));
  }
}
