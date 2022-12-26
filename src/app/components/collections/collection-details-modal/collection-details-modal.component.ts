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
      transition('* <=> open', [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeUp', [
      transition('* => open', [
        style({ opacity: 0, transform: 'translateY(3%)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
  ]
})
export class CollectionDetailsModalComponent {
  nameControl = new FormControl();
  fieldValid: boolean = true;
  showAccentPicker: boolean = false;
  selectedIcon: string | undefined = "🚧";
  selectedAccentColor: string = "hsla(340,94%,72%,1.0)";
  @Input() collectionExists: boolean = false;
  @Input() collection: Collection | undefined | null = {
    id: uuidv4(),
    name: this.nameControl.getRawValue(),
    tasks: [],
    iconPath: this.selectedIcon,
    accentColor: this.selectedAccentColor,
  };
  @Output('close') closeModal = new EventEmitter();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // load existing values
    if (this.collectionExists) {
      this.nameControl.setValue(this.collection!.name);
      this.selectedAccentColor = this.collection!.accentColor;
      this.selectedIcon = this.collection!.iconPath;
    }
  }

  save() {
    if (!isNameValid(this.nameControl.getRawValue())) {
      this.fieldValid = false;
      return;
    }

    const collection: Collection = {
      ...this.collection!,
      accentColor: this.selectedAccentColor,
      iconPath: this.selectedIcon,
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

  assignAccentColor(color: string) {
    this.selectedAccentColor = color;
    this.toggleAccentPicker();
  }
}
