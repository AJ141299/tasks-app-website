import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Collection } from 'src/app/state/models/ui.models';
import { createCollection } from 'src/app/state/actions/ui.actions';
import { v4 as uuidv4 } from 'uuid';
import { FormControl } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

const isFieldValid = (value: string | null | undefined) => {
  return value != null && value != '' && value != undefined;
};

@Component({
  selector: 'add-collection-modal',
  templateUrl: './add-collection-modal.component.html',
  styleUrls: ['./add-collection-modal.component.scss'],
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
export class AddCollectionModalComponent {
  nameControl = new FormControl();
  fieldValid: boolean = true;
  showAccentPicker: boolean = false;
  selectedAccentColor: string = "hsla(340,94%,72%,1.0)";
  @Output() complete = new EventEmitter();

  constructor(private store: Store<AppState>) { }

  save() {
    const name = this.nameControl.getRawValue();

    if (!isFieldValid(name)) {
      this.fieldValid = false;
      return;
    }

    const collection: Collection = {
      id: uuidv4(),
      name: name,
      tasks: [],
      iconPath: "🗒",
      accentColor: this.selectedAccentColor,
    };

    this.store.dispatch(createCollection(collection));
    this.closeModal();
  }

  closeModal() {
    this.complete.emit();
  }

  toggleAccentPicker() {
    this.showAccentPicker = !this.showAccentPicker;
  }

  assignAccentColor(color: string) {
    this.selectedAccentColor = color;
    this.toggleAccentPicker();
  }
}
