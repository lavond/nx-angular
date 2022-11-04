import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@nx-angular/data';

@Component({
  selector: 'nx-angular-todos',
  template: `
    <ul>
      <li *ngFor="let t of todos" class="todo">{{ t.title }}</li>
    </ul>
  `,
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() {}

  ngOnInit() {}
}
