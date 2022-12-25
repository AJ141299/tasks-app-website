import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { loadCollectionsFromLocalStorage } from "src/app/helpers/helpers";
import { AppState } from "src/app/state/app.state";
import { Collection } from "src/app/state/models/ui.models";
import { selectAllCollections } from "src/app/state/selectors/ui.selectors";

@Injectable()
export class CollectionExists {
  constructor(private router: Router, private store: Store<AppState>) {
    loadCollectionsFromLocalStorage(this.store);
  }
  
  exists(collectionId: string): boolean {
    const allCollections$ = this.store.select(selectAllCollections);
    let collectionExists = false;
    allCollections$
      .pipe(
        tap((collection: Collection[]) => {
          collection.forEach((collection: Collection) => {
            if (collection.id == collectionId) {
              collectionExists = true;
            }
          })
        })
      )
      .subscribe()

    if (collectionExists) {
      return true;
    }
    this.router.navigate(['/404']);
    return false;
  }
}

@Injectable()
export class CanActivateCollection implements CanActivate {
  constructor(private collectionExists: CollectionExists) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return this.collectionExists.exists(route.params['collectionId']);
  }
}