import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

export interface ModalOption {
  name: string;
  value: string;
}

@Component({
  selector: 'dropdown-modal',
  templateUrl: './dropdown-modal.component.html',
  styleUrls: ['./dropdown-modal.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('50ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('150ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class DropdownModalComponent {
  @Input() toggleModal: boolean = false;
  @Input() options: ModalOption[] = [];
  @Output() optionSelected = new EventEmitter<ModalOption>();

  selected(option: ModalOption) {
    this.optionSelected.emit(option);
  }
}
