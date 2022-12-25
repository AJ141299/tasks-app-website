import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, map, tap } from 'rxjs';
import { createCollection } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { Collection, Task } from 'src/app/state/models/ui.models';
import { selectAllCollections } from 'src/app/state/selectors/ui.selectors';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  collectionId: string = "123";
  collection$ = this.store.select(selectAllCollections).pipe(
    map((collections: Collection[]) => collections.find(
      (collection: Collection) => collection.id == this.collectionId
    ))
  );
  allTasks$ = this.collection$.pipe(
    map((collection: Collection | undefined) => collection!.tasks)
  );
  incompleteTasks$ = this.allTasks$.pipe(
    map((tasks: Task[]) => tasks.filter((task: Task) => !task.isComplete))
  );
  completeTasks$ = this.allTasks$.pipe(
    map((tasks: Task[]) => tasks.filter((task: Task) => task.isComplete))
  );

  constructor(private store: Store<AppState>) { }
  
  ngOnInit() {
    const task: Task = {
      id: uuidv4(),
      content: "meow meow",
      isComplete: false
    };

    const collection: Collection = {
      id: "123",
      name: "School",
      completedTasksCount: 0,
      tasksCount: 0,
      iconPath: "🗒",
      accentColor: "hsla(340,94%,72%,1.0)",
      tasks: [task]
    };

    this.store.dispatch(createCollection(collection));
  }
}
