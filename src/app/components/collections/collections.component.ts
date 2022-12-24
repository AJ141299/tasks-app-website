import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { createCollection } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { Collection } from 'src/app/state/models/ui.models';
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
      title: "School",
      completedTasksCount: 5,
      tasksCount: 10,
      iconPath: "🗒",
      accentColor: "hsla(340,94%,72%,1.0)",
    };

    this.store.dispatch(createCollection(collection));
  }
}
