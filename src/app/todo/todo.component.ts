import { Component } from '@angular/core';
import { Todo } from '../class/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoValue: string='';

  todoList: Todo[]=[
    {
      content:"Todo 1",
      value: false
    },
    {
      content:"Todo 2",
      value: false
    },
    {
      content:"Todo 3",
      value: false
    }
  ];

  finishedList: Todo[]=[]

  constructor(){

  }

  changeTodo(i: number){
    const item=this.todoList.splice(i,1);
    this.finishedList.push(item[0]);

  }

  addTodo(){
    this.todoList.push({content:this.todoValue,value:false})
    this.todoValue='';
  }

  changeFinished(i: number){
    const item=this.finishedList.splice(i,1);
    this.todoList.push(item[0]);

  }

  deleteTodo(i: number){
    this.todoList.splice(i,1);
  }
  deleteFinished(i: number){
    this.finishedList.splice(i,1);
  }

}
