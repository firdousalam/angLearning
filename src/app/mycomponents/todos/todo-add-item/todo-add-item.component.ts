import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.css']
})
export class TodoAddItemComponent implements OnInit {
  sno!: number;
  title!: string;
  description!:string
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();


  constructor() 
  {
   
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo:Todo = {
      sno : this.sno,
      title : this.title,
      description : this.description,
      active : true
    }
    console.log(todo);
    console.log(typeof todo);
    this.todoAdd.emit(todo);
    console.log("submitted");
  }
}
