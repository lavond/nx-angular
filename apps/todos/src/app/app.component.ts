import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "@nx-angular/data";

@Component({
  selector: 'nx-angular-root',
  template: `
    <h1>Todos</h1>

    <nx-angular-todos [todos]="todos"></nx-angular-todos>

    <button id="add-todo" (click)="addTodo()">Add Todo</button>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
