import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/Model/ToDo';
import { ToDoDataService } from '../to-do-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  toDo?: ToDo[];
  constructor(private _toDoDataService: ToDoDataService) {}

  ngOnInit(): void {
    //display the array here
    this.toDo = this._toDoDataService.getAllTask();
  }

  removeTask = (id: number) => {
    this.toDo?.splice(id, 1);
  };
}
