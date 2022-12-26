import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { createTask } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { Collection, Task } from 'src/app/state/models/ui.models';
import { selectAllCollections } from 'src/app/state/selectors/ui.selectors';
import { v4 as uuidv4 } from 'uuid';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModalOption } from '../dropdown-modal/dropdown-modal.component';

const setAccentColors = (collection$: Observable<Collection | undefined>) => {
  const taskIcon: HTMLElement | null = document.querySelector('.add-task-icon');
  collection$.pipe(
    tap((collection: Collection | undefined) => {
      taskIcon!.style.backgroundColor = collection!.accentColor;
    })
  ).subscribe();
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
  collectionId: string;
  collection$: Observable<Collection | undefined>;
  allTasks$: Observable<Task[]>;
  incompleteTasks$: Observable<Task[]>;
  completeTasks$: Observable<Task[]>;
  addTaskControl: FormControl = new FormControl();
  showCollectionModal: boolean = false;
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
  
  ngOnInit() {
    this.collectionId = this.route.snapshot.paramMap.get('collectionId')!;
    this.collection$ = this.store.select(selectAllCollections).pipe(
      map((collections: Collection[]) => collections.find(
        (collection: Collection) => collection.id == this.collectionId
      ))
    );
    this.allTasks$ = this.collection$.pipe(
      map((collection: Collection | undefined) => collection!.tasks)
    );
    this.incompleteTasks$ = this.allTasks$.pipe(
      map((tasks: Task[]) => tasks.filter((task: Task) => !task.isComplete))
    );
    this.completeTasks$ = this.allTasks$.pipe(
      map((tasks: Task[]) => tasks.filter((task: Task) => task.isComplete))
    );

    setAccentColors(this.collection$);
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

  navigateBack() {
    this.router.navigate(['/collections']);
  }

  toggleCollectionModal() {
    this.showCollectionModal = !this.showCollectionModal;
  }

  toggleEditCollection() {
    this.editingCollection = !this.editingCollection;
  }

  handleCollectionModalOption(option: ModalOption) {
    this.toggleCollectionModal();

    if (option.value == "delete") {
      return;
    }

    this.toggleEditCollection();
  }
}
