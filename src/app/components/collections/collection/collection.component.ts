import { Component, Input } from '@angular/core';
import { Collection, Task } from 'src/app/state/models/ui.models';
import { Router } from '@angular/router';

const completePercent = (collection: Collection): number => {
  const completeCount = collection.tasks
    .filter((task: Task) => task.isComplete)
    .length;
  const percent = Math.round(completeCount / collection.tasks.length * 100);
  
  if (isNaN(percent)) {
    return 0;
  }
  return percent
};

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  @Input() collectionData: Collection;
  completePercent: number;
  progressCircleInnerColor: string = 'hsla(240,11%,27%,1.0)';

  constructor(private router: Router) { }

  ngOnInit() {
    this.completePercent = completePercent(this.collectionData);
    console.log(this.completePercent)
  }

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

  open() {
    this.router.navigate(['/collection', this.collectionData.id]);
  }
}
