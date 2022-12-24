import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { createCollection } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { Collection } from 'src/app/state/models/ui.models';
import { selectAllCollections } from 'src/app/state/selectors/ui.selectors';

@Component({
  selector: 'collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent {
  allCollections$ = this.store.select(selectAllCollections);

  constructor(private store: Store<AppState>) { }
  
  addCollection() {
    console.log("creating new collection");
    const collection: Collection = {
      id: `${Math.random()}`,
      title: "School",
      completedTasksCount: 5,
      tasksCount: 10,
      iconPath: "🗒",

    };

    this.store.dispatch(createCollection(collection));
  }
}
