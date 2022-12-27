import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, tap } from 'rxjs';
import { setShowSideBar } from 'src/app/state/actions/ui.actions';
import { AppState } from 'src/app/state/app.state';
import { selectShowSideBar } from 'src/app/state/selectors/ui.selectors';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showSideBar$ = this.store.select(selectShowSideBar);

  constructor(private store: Store<AppState>) { }

  toggleSideBar() {
    this.showSideBar$.pipe(first()).subscribe(
      (showSideBar) => {
        this.store.dispatch(setShowSideBar({showSideBar: !showSideBar}))
      }
    )
  }
}
