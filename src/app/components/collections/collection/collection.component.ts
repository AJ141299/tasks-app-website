import { Component, Input } from '@angular/core';
import { Collection } from 'src/app/state/models/ui.models';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  @Input() collectionData: Collection;

  getTasksStatus() {
    return this.collectionData.completedTasksCount == 0 && this.collectionData.tasksCount == 0
    ? 'No tasks'
    : this.collectionData.tasksCount == this.collectionData.completedTasksCount
      ? `All ${this.collectionData.tasksCount} done!`
        : `${this.collectionData.completedTasksCount}/${this.collectionData.tasksCount} done`
  }

  createProgressCircle() {
    return " ⃝";
  }
}
