import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { loadCollectionsFromLocalStorage } from 'src/app/helpers/helpers';
import { AppState } from 'src/app/state/app.state';
import { Collection } from 'src/app/state/models/ui.models';
import { selectAllCollections } from 'src/app/state/selectors/ui.selectors';

export enum SortCollectionsBy {
  favourites,
  all
}

@Component({
  selector: 'collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1})),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10%)' }),
        animate('200ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('200ms', style({ opacity: 0, transform: 'translateY(10%)' })),
      ])
    ]),
  ]
})
export class CollectionsComponent {
  allCollections$ = this.store.select(selectAllCollections);
  addingCollection: boolean = false;
  sortBy: SortCollectionsBy = SortCollectionsBy.all;
  SortCollectionsBy = SortCollectionsBy;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    loadCollectionsFromLocalStorage(this.store);
  }
  
  toggleCollectionDetailsModal() {
    this.addingCollection = !this.addingCollection;
  }

  sortCollectionsBy(type: SortCollectionsBy) {
    if (type == SortCollectionsBy.favourites) {
      this.allCollections$ = this.allCollections$.pipe(
        map((collections: Collection[]) => {
          return collections.filter(
            (collection: Collection) => collection.isFavourite == true
          );
        })
      )
    } else {
      this.allCollections$ = this.store.select(selectAllCollections);
    }

    this.sortBy = type;
  }
}
