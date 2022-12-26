import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCollectionsFromLocalStorage } from 'src/app/helpers/helpers';
import { AppState } from 'src/app/state/app.state';
import { selectAllCollections } from 'src/app/state/selectors/ui.selectors';

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
        style({ opacity: 0, transform: 'translateY(15%)' }),
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
  addingCollection: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    loadCollectionsFromLocalStorage(this.store);
  }
  
  toggleCollectionDetailsModal() {
    this.addingCollection = !this.addingCollection;
  }
}
