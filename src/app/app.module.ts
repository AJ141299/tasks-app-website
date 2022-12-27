import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { CollectionComponent } from './components/collections/collection/collection.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BlockScreenComponent } from './components/block-screen/block-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EffectsModule } from '@ngrx/effects';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AccentColorPickerComponent } from './components/collections/accent-color-picker/accent-color-picker.component';
import { ModalScreenComponent } from './components/modal-screen/modal-screen.component';
import { DropdownModalComponent } from './components/dropdown-modal/dropdown-modal.component';
import { CollectionDetailsModalComponent } from './components/collections/collection-details-modal/collection-details-modal.component';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { FavouriteCollectionButtonComponent } from './components/collections/favourite-collection-button/favourite-collection-button.component';
import { IconPickerComponent } from './components/collections/icon-picker/icon-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CollectionComponent,
    NavbarComponent,
    CollectionsComponent,
    BlockScreenComponent,
    TasksComponent,
    PageNotFoundComponent,
    AccentColorPickerComponent,
    ModalScreenComponent,
    DropdownModalComponent,
    CollectionDetailsModalComponent,
    FavouriteCollectionButtonComponent,
    IconPickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgClickOutsideDirective,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(effects),
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
