import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/Model/ToDo';
import { ToDoDataService } from '../to-do-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'ToDo List';
  taskName: string = '';
  taskDescription: string = '';

  constructor(private _toDoDataService: ToDoDataService) {}

  ngOnInit(): void {}
  addTask = () => {
    this._toDoDataService.taskData?.push({
      TaskName: this.taskName,
      TaskDescription: this.taskDescription,
    });
    this.taskName = '';
    this.taskDescription = '';
    alert(this._toDoDataService.a());
  };
}
