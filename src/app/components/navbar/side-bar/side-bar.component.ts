import { Component, EventEmitter, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectAllCollections } from 'src/app/state/selectors/ui.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('200ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class SideBarComponent {
  collections$ = this.store.select(selectAllCollections);
  currentCollectionId: string | null = null;
  currentCollectionColor: string = 'hsla(240,13%,20%,1.0)';
  @Output() closeSideBar = new EventEmitter();

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { 
    // hacky, but can't get params easily outside of router-outlet
    const splitUrl: string[] = this.router.url.split('/');
    if (splitUrl[1] == 'collection') {
      this.currentCollectionId = splitUrl[2];
    }
  }
  
  openCollection(collectionId: string) {
    this.closeSideBar.emit();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['collection', collectionId])
  }
}
