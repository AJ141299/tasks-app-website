import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { addCollectionStatus, createCollection } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { AddCollectionStatus, Collection } from 'src/app/state/models/ui.models';
import { selectAllCollections } from 'src/app/state/selectors/ui.selectors';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent {
  allCollections$ = this.store.select(selectAllCollections);

  constructor(private store: Store<AppState>) { }
  
  addCollection() {
    const collection: Collection = {
      id: uuidv4(),
      name: "School",
      completedTasksCount: 5,
      tasksCount: 10,
      iconPath: "🗒",
      accentColor: "hsla(340,94%,72%,1.0)",
    };

    this.store.dispatch(createCollection(collection));

    // TODO: remove
    this.allCollections$.pipe(
      tap(collections => {
        if (collections.length == 10 || collections.length == 12)  {
          this.store.dispatch(addCollectionStatus({addCollectionStatus: AddCollectionStatus.Pending, blockScreen: true}));
        } else {
          this.store.dispatch(addCollectionStatus({addCollectionStatus: AddCollectionStatus.Complete, blockScreen: false}));
        }
      })
    ).subscribe();
  }
}
