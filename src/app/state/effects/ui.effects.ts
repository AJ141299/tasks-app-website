import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { selectAllCollections } from "../selectors/ui.selectors";
import { withLatestFrom, tap } from "rxjs";
import { upsertCollection, createTask, deleteTask, revertTaskCompleteStatus, updateTask, deleteCollection } from "../actions/ui.actions";

@Injectable()
export class UiEffects {
    collections$ = this.store.select(selectAllCollections);

    constructor(
        private actions$: Actions,
        private store: Store<AppState>
    ) { }

    saveCollections$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                upsertCollection,
                createTask,
                updateTask,
                deleteTask,
                revertTaskCompleteStatus,
                deleteCollection
            ),
            withLatestFrom(this.collections$),
            tap(([_, collections]) => {
                localStorage.setItem('collections', JSON.stringify(collections));
            })
        ),
        {dispatch: false}
    );
}