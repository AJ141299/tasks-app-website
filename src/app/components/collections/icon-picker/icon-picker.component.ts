import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

export const IconFilePaths: string[] = [
  "assets/icons/user-light.svg",
  "assets/icons/camera-light.svg",
  "assets/icons/grad_hat-light.svg",
  "assets/icons/heart-light.svg",
  "assets/icons/bag-light.svg",
  "assets/icons/moon-light.svg",
  "assets/icons/paint_brush-light.svg",
  "assets/icons/people-light.svg",
  "assets/icons/tool-light.svg",
  "assets/icons/tools-light.svg",
  "assets/icons/tv-light.svg",
]

@Component({
  selector: 'icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class IconPickerComponent {
  @Input() accentColor: string;
  IconFilePaths = IconFilePaths;
  @Output() closePicker = new EventEmitter<string>();

  closeIconPicker(iconPath: string) {
    this.closePicker.emit(iconPath);
  }
}
