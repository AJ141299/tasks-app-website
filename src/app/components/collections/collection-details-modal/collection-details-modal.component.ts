import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Collection } from 'src/app/state/models/ui.models';
import { upsertCollection } from 'src/app/state/actions/ui.actions';
import { v4 as uuidv4 } from 'uuid';
import { FormControl } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

const isNameValid = (value: string | null | undefined) => {
  return value != null && value != '' && value != undefined;
};

@Component({
  selector: 'collection-details-modal',
  templateUrl: './collection-details-modal.component.html',
  styleUrls: ['./collection-details-modal.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CollectionDetailsModalComponent {
  nameControl = new FormControl();
  fieldValid: boolean = true;
  showAccentPicker: boolean = false;
  showIconPicker: boolean = false;
  selectedIconPath: string | undefined = "";
  selectedAccentColor: string = 'hsla(240,13%,50%,1.0)';
  isFavourite: boolean = false;
  @Input() collectionExists: boolean = false;
  @Input() collection: Collection = {
    id: uuidv4(),
    name: this.nameControl.getRawValue(),
    tasks: [],
    iconPath: this.selectedIconPath,
    accentColor: this.selectedAccentColor,
    isFavourite: false
  };
  @Output('close') closeModal = new EventEmitter();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // load existing values
    if (this.collectionExists) {
      this.nameControl.setValue(this.collection.name);
      this.selectedAccentColor = this.collection.accentColor;
      this.selectedIconPath = this.collection.iconPath;
      this.isFavourite = this.collection.isFavourite;
    }
  }

  save() {
    if (!isNameValid(this.nameControl.getRawValue())) {
      this.fieldValid = false;
      return;
    }

    const collection: Collection = {
      ...this.collection,
      isFavourite: this.isFavourite,
      accentColor: this.selectedAccentColor,
      iconPath: this.selectedIconPath,
      name: this.nameControl.getRawValue(),
    }

    this.store.dispatch(upsertCollection(collection));
    this.close()
  }

  close() {
    this.closeModal.emit();
  }

  toggleAccentPicker() {
    this.showAccentPicker = !this.showAccentPicker;
  }

  toggleIconPicker() {
    this.showIconPicker = !this.showIconPicker;
  }

  assignAccentColor(color: string) {
    this.selectedAccentColor = color;
    this.toggleAccentPicker();
  }

  assignIconPath(iconPath: string) {
    this.selectedIconPath = iconPath;
    this.toggleIconPicker();
  }

  updateFavourite(isFavourite: boolean) {
    this.isFavourite = isFavourite
  }
}
