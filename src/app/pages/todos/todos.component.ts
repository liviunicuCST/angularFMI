import { Component, OnInit } from '@angular/core';
import {MainServiceService} from './../../services/main-service.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title = 'test-app';
  todos:any=[];
  allTodos:any=[];
  selectedText:string="";
  constructor(private mainSerivice:MainServiceService){}
  
  ngOnInit(){
   this.getAllTodos();
  }

  getAllTodos(){
    
    this.mainSerivice.getToDos().subscribe((response)=>{
      this.todos=response;
      this.allTodos=response;
    })
    
  }
  setText(event){
    this.selectedText=event;
  }

  filterByCompleted(isCompleted){
    this.todos=this.allTodos.filter((item)=> item.completed===isCompleted)
  }

}
