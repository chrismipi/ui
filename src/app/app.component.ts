import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService],
})
export class AppComponent {
  newTodo: Todo = new Todo();
  todosList: Todo[] = [];

  constructor(private todoDataService: TodoDataService) {
    this.todos();
  }

    addTodo(): void {
    this.todoDataService.addTodo(this.newTodo).subscribe((data: Todo[]) => {
      this.todosList = data;
    });
    this.newTodo = new Todo();
  }

    toggleTodoComplete(todo): void {
    this.todoDataService.toggleTodoComplete(todo).subscribe((data: Todo[]) => {
      this.todosList = data;
    });
  }

    removeTodo(todo): void {
    this.todoDataService.deleteTodoById(todo.id).subscribe((data: Todo[]) => {
      this.todosList = data;
    });
  }

    private todos(): void {
    this.todoDataService.getAllTodos().subscribe((data: Todo[]) => {
      this.todosList = data;
    });
  }
}
