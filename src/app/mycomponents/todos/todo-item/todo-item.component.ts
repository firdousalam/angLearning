import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!:Todo
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toDelete(item:Todo){
    this.todoDelete.emit(item);
    console.log("item to be deleted ",item);
  }
}
