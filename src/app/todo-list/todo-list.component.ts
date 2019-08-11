import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$;
  constructor(private store: Store<{ count: number }>) {
    this.todos$ = store.pipe(select('app'));
  }

  markDone() {

  }

  ngOnInit() {
  }

}
