import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class TodoDataService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  configUrl = environment.apiUrl;
  functions = environment.functions;
  // Placeholder for todoss
  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  // Simulate POST /todos
  addTodo(todo: Todo) {
    return this.http.post(this.functions.add, todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: string) {
    return this.http.delete(`${this.configUrl}/${id}`);
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: string, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos() {
    return this.http.get(this.functions.get);
  }

  // Simulate GET /todos/:id
  getTodoById(id: string): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.http.put(this.functions.update, todo);
  }
}
