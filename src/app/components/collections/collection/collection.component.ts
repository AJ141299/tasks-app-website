import { Component, Input } from '@angular/core';
import { Collection, Task } from 'src/app/state/models/ui.models';
import { Router } from '@angular/router';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  @Input() collectionData: Collection;

  constructor(private router: Router) {}

  getTasksStatus() {
    const completeTasksCount = this.collectionData.tasks
      .filter((task: Task) => task.isComplete)
      .length;

    return completeTasksCount == 0 && this.collectionData.tasks.length == 0
    ? 'No tasks'
    : this.collectionData.tasks.length == completeTasksCount
      ? `All ${this.collectionData.tasks.length} done!`
        : `${completeTasksCount}/${this.collectionData.tasks.length} done`
  }

  createProgressCircle() {
    return " ⃝";
  }

  open() {
    this.router.navigate(['/collection', this.collectionData.id]);
  }
}
