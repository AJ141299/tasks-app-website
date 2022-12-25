import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { CollectionComponent } from './components/collections/collection/collection.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AddCollectionModalComponent } from './components/collections/add-collection-modal/add-collection-modal.component';
import { BlockScreenComponent } from './components/block-screen/block-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CollectionComponent,
    NavbarComponent,
    CollectionsComponent,
    AddCollectionModalComponent,
    BlockScreenComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
