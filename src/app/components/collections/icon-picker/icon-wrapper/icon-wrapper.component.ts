import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-wrapper',
  templateUrl: './icon-wrapper.component.html',
  styleUrls: ['./icon-wrapper.component.scss']
})
export class IconWrapperComponent {
  @Input() accentColor: string = 'hsla(240,13%,50%,1.0)';
}
