import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { createTask, deleteCollection, setCollectionFavourite } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { Collection, Task } from 'src/app/state/models/ui.models';
import { selectAllCollections } from 'src/app/state/selectors/ui.selectors';
import { v4 as uuidv4 } from 'uuid';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModalOption } from '../dropdown-modal/dropdown-modal.component';

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
  collectionId: string = this.route.snapshot.paramMap.get('collectionId')!;
  collection$: Observable<Collection | undefined> = this.store.select(selectAllCollections).pipe(
      map((collections: Collection[]) => collections.find(
        (collection: Collection) => collection.id == this.collectionId
      ))
  );
  allTasks$: Observable<Task[] | undefined> = this.collection$.pipe(
    map((collection: Collection | undefined) => collection?.tasks)
  );
  incompleteTasks$: Observable<Task[] | undefined> = this.allTasks$.pipe(
    map((tasks: Task[] | undefined) => tasks?.filter((task: Task) => !task.isComplete))
  );
  completeTasks$: Observable<Task[] | undefined> = this.allTasks$.pipe(
    map((tasks: Task[] | undefined) => tasks?.filter((task: Task) => task.isComplete))
  );
  addTaskControl: FormControl = new FormControl();
  showCollectionOptions: boolean = false;
  collectionModalOptions: ModalOption[] = [
    {
      name: "Edit",
      value: "edit"
    },
    {
      name: "Delete",
      value: "delete"
    }
  ];
  editingCollection: boolean = false;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

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

  navigateBack() {
    this.router.navigate(['/collections']);
  }

  toggleCollectionOptions() {
    this.showCollectionOptions = !this.showCollectionOptions;
  }

  closeCollectionOptions() {
    if (this.showCollectionOptions) {
      this.showCollectionOptions = false;
    }
  }

  toggleEditCollection() {
    this.editingCollection = !this.editingCollection;
  }

  handleCollectionModalOption(option: ModalOption) {
    this.toggleCollectionOptions();

    if (option.value == "delete") {
      this.store.dispatch(deleteCollection({ collectionId: this.collectionId }));
      this.router.navigate(['/collections'])
      return;
    }

    this.toggleEditCollection();
  }

  updateFavourite(isFavourite: boolean) {
    this.store.dispatch(setCollectionFavourite(
      {
        collectionId: this.collectionId,
        isFavourite: isFavourite
      }
    ));
  }
}
