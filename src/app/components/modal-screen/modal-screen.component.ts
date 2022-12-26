import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'modal-screen',
  templateUrl: './modal-screen.component.html',
  styleUrls: ['./modal-screen.component.scss'],
  animations: [
    trigger('fade', [
      transition('* <=> open', [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ModalScreenComponent {
  ngOnInit() {
    document.body.classList.add('disable-scrolling');
  }

  ngOnDestroy() {
    document.body.classList.remove('disable-scrolling');
  }
}
