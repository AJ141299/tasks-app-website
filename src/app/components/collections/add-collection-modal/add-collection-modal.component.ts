import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AddCollectionStatus, Collection } from 'src/app/state/models/ui.models';
import { createCollectionStatus, createCollection } from 'src/app/state/actions/ui.actions';
import { v4 as uuidv4 } from 'uuid';
import { FormControl } from '@angular/forms';

const isFieldValid = (value: string | null | undefined) => {
  return value != null && value != '' && value != undefined;
};

@Component({
  selector: 'add-collection-modal',
  templateUrl: './add-collection-modal.component.html',
  styleUrls: ['./add-collection-modal.component.scss']
})
export class AddCollectionModalComponent {
  nameControl = new FormControl();
  fieldValid: boolean = true;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    document.body.classList.add('disable-scrolling');
  }

  ngOnDestroy() {
    document.body.classList.remove('disable-scrolling');
  }

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
      accentColor: "hsla(340,94%,72%,1.0)",
    };

    this.store.dispatch(createCollection(collection));
    this.store.dispatch(createCollectionStatus({ addCollectionStatus: AddCollectionStatus.Complete, blockScreen: false }));
  }

  discard() {
    this.store.dispatch(createCollectionStatus({ addCollectionStatus: AddCollectionStatus.Complete, blockScreen: false }));
  }
}
