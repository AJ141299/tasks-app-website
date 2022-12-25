import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { deleteTask } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { Task } from 'src/app/state/models/ui.models';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() collectionId: string;
  @Input() task: Task;
  taskContent = new FormControl();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.taskContent.setValue(this.task.content);
  }

  updateTask(): void {
    const currentContent = this.taskContent.getRawValue();

    if (currentContent == '') {
      this.store.dispatch(deleteTask(
        { collectionId: this.collectionId, taskId: this.task.id }
      ));
      return;
    }
  }
}
