import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 todos :Todo[];
  constructor() { 
    let todosItem = localStorage.getItem("todos");
    if(todosItem){
    this.todos = JSON.parse(localStorage.getItem("todos")!);
    }else{
      this.todos = [];
    }
  }

  ngOnInit(): void {
  }
  deleteToDo(todo : Todo){
    console.log(todo)
    let TodoIndex = this.todos.indexOf(todo);
    this.todos.splice(TodoIndex,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addToDo(todo : Todo){
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
