import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.css']
})
export class ToDoTableComponent implements OnInit {
  @Input() todosChild;
  @Output() selectData = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
   
  }

  selectTodo(text){
    this.selectData.emit(text);
  }

}
