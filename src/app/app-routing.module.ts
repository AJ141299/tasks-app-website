import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: 'collections', component: CollectionsComponent },
  { path: 'tasks/:collectionId', component: TasksComponent },
  { path: '',   redirectTo: '/collections', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
