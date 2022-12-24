import { Component } from '@angular/core';

const getTasksStatus = (completedTasksCount: number, totalTasks: number): string => {
  if (totalTasks == completedTasksCount) {
    return `All ${totalTasks} done!`;
  }

  return `${completedTasksCount}/${totalTasks} done`;
}

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  icon: string = "📄";
  title: string = "Work";
  tasksStatus: string = getTasksStatus(5, 10);
  progressCircle: string = " ⃝";
}
