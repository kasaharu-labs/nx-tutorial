import { Component } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'nx-tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
}
