import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CanActivateCollection, CollectionExists } from './components/guards/canActivateCollection';

const routes: Routes = [
  {
    path: 'collections',
    component: CollectionsComponent
  },
  {
    path: 'collection/:collectionId',
    component: TasksComponent,
    canActivate: [CanActivateCollection]
  },
  {
    path: '',
    redirectTo: '/collections',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateCollection, CollectionExists]
})
export class AppRoutingModule { }
