import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'block-screen',
  templateUrl: './block-screen.component.html',
  styleUrls: ['./block-screen.component.scss'],
  animations: [
    trigger('blockScreenTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class BlockScreenComponent {

}
