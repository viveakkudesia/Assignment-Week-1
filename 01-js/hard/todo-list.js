/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list = []; // Initialize an empty array to store todos
  }

  // Method to add a new todo to the list
  add(todo) {
    this.list.push(todo);
  }

  // Method to remove a todo by index
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.list.length) {
      this.list.splice(indexOfTodo, 1);
    }
    // If index is invalid, do nothing
  }

  // Method to update a todo at a given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.list.length) {
      this.list[index] = updatedTodo;
    }
    // If index is invalid, do nothing
  }

  // Method to get all todos
  getAll() {
    return this.list;
  }

  // Method to get a specific todo by index
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.list.length) {
      return this.list[indexOfTodo];
    }
    return null; // Return null if the index is invalid
  }

  // Method to clear all todos
  clear() {
    this.list = [];
  }
}
module.exports = Todo;
