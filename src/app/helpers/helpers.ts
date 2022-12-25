import { Store } from "@ngrx/store"
import { loadCollections } from "../state/actions/ui.actions";
import { AppState } from "../state/app.state"

export const loadCollectionsFromLocalStorage = (store: Store<AppState>) => {
    const localCollections = window.localStorage.getItem('collections');
    if (localCollections) {
      store.dispatch(loadCollections({collections: JSON.parse(localCollections)}))
    }
}