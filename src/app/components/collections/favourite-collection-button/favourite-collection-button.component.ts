import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { upsertCollection } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { Collection } from 'src/app/state/models/ui.models';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'favourite-collection-button',
  templateUrl: './favourite-collection-button.component.html',
  styleUrls: ['./favourite-collection-button.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('100ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FavouriteCollectionButtonComponent {
  @Input() collection: Collection | undefined | null;
  isFavourite: boolean | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isFavourite = this.collection!.isFavourite;
  }
  
  toggleFavourite() {
    this.isFavourite = !this.isFavourite;
    
    const updateFavourite: Collection = {
      ...this.collection!,
      isFavourite: this.isFavourite
    };

    this.store.dispatch(upsertCollection(updateFavourite));
  }
}
