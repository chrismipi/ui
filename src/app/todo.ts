export class Todo {
  id: string;
  title = '';
  complete = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
