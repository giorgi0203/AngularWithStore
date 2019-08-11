import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { Action } from './interfaces';
import { todoReducer } from './reducers/todo';



@Injectable({
  providedIn: 'root'
})
export class StoreService {

  state: Observable<any>;
  actions: Subject<Action> = new Subject();


  constructor() {
    this.state = this.actions.pipe(
      // this.reducer()
    );
  }

  reducer = () => todoReducer;
}
