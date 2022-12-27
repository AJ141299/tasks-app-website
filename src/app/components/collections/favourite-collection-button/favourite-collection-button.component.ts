import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() isFavourite: boolean = false;
  @Output('favouriteUpdated') favouriteUpdated = new EventEmitter<boolean>();
  
  toggleFavourite() {
    this.isFavourite = !this.isFavourite;

    this.favouriteUpdated.emit(this.isFavourite);
  }
}
