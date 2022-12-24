import { Component } from '@angular/core';

@Component({
  selector: 'add-collection-modal',
  templateUrl: './add-collection-modal.component.html',
  styleUrls: ['./add-collection-modal.component.scss']
})
export class AddCollectionModalComponent {
  ngOnInit() {
    document.body.classList.add('disable-scrolling');
  }

  ngOnDestroy() {
    document.body.classList.remove('disable-scrolling');
  }
}
