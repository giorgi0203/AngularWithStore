import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWithStore';
  todos$;
  constructor(private store: Store<{ count: number }>) {
    this.todos$ = store.pipe(select('app'));
    console.log(this.todos$);
    
  }
}
