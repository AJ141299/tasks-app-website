import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { CollectionComponent } from './components/collection/collection.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AddCollectionModalComponent } from './components/add-collection-modal/add-collection-modal.component';
import { BlockScreenComponent } from './components/block-screen/block-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CollectionComponent,
    NavbarComponent,
    CollectionsComponent,
    AddCollectionModalComponent,
    BlockScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
