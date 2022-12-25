import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { createCollection, createTask } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { Collection, Task } from 'src/app/state/models/ui.models';
import { selectAllCollections } from 'src/app/state/selectors/ui.selectors';
import { v4 as uuidv4 } from 'uuid';
import { animate, style, transition, trigger } from '@angular/animations';

const setAccentColors = (accentColor: string) => {
  const taskIcon: HTMLElement | null = document.querySelector('.add-task-icon');
  taskIcon!.style.backgroundColor = accentColor;
}

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  animations: [
    trigger('fadeDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50%)' }),
        animate('200ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ])
  ]
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
  addTaskControl = new FormControl();
  accentColor: string;

  constructor(private store: Store<AppState>) { }
  
  ngOnInit() {
    const collection: Collection = {
      id: "123",
      name: "School",
      iconPath: "🗒",
      accentColor: "hsla(340,94%,72%,1.0)",
      tasks: []
    };

    this.store.dispatch(createCollection(collection));
    this.collection$.pipe(
      tap((collection: Collection | undefined) => {
        this.accentColor = collection!.accentColor;
      })
    ).subscribe();
    setAccentColors(this.accentColor);
  }

  addTask() {
    const taskContent = this.addTaskControl.getRawValue();
    if (taskContent == null || taskContent == '') {
      return;
    };
    const task: Task = {
      id: uuidv4(),
      content: taskContent,
      isComplete: false
    };

    this.store.dispatch(createTask({ collectionId: this.collectionId, task: task }));
    this.addTaskControl.reset();
  }
}
