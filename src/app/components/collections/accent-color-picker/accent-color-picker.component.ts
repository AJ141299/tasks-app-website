import { Component, EventEmitter, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'accent-color-picker',
  templateUrl: './accent-color-picker.component.html',
  styleUrls: ['./accent-color-picker.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => open', [
        style({ opacity: 0 }),
        animate(3000, style({ opacity: 1 }))
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
export class AccentColorPickerComponent {
	@Output() closeAccentEvent = new EventEmitter<string>();

	colors = [
		'hsla(340,94%,72%,1.0)',
		'hsla(0,94%,72%,1.0)',
		'hsla(20,94%,72%,1.0)',
		'hsla(40,90%,72%,1.0)',
		'hsla(60,94%,72%,1.0)',
		'hsla(100,94%,72%,1.0)',
		'hsla(130,94%,72%,1.0)',
		'hsla(150,94%,72%,1.0)',
		'hsla(180,94%,72%,1.0)',
		'hsla(200,94%,72%,1.0)',
		'hsla(220,94%,72%,1.0)',
		'hsla(250,94%,72%,1.0)',
		'hsla(270,94%,72%,1.0)',
		'hsla(290,94%,72%,1.0)',
		'hsla(240,13%,50%,1.0)'
	];
	
	closeAccentPicker(color: string) {
		this.closeAccentEvent.emit(color);
	}
}
