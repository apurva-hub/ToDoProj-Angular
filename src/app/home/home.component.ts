import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/Model/ToDo';
import { ToDoData } from 'src/Model/ToDoData';
import { ToDoDataService } from '../to-do-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  toDo?: any[];
  toDoData?: ToDoData[];

  @Input() count: number | any;
  constructor(
    private _toDoDataService: ToDoDataService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    //captures all the values[subscribe] and store it in toDo and for that
  }

  getTask = () => {
    if (this.count != null) {
      this._toDoDataService
        .getTaskData()
        .subscribe((data) => (this.toDoData = data).splice(this.count));
    } else {
      this._toDoDataService
        .getTaskData()
        .subscribe((data) => (this.toDoData = data));
    }
  };

  ngOnInit(): void {
    this.getTask();
  }

  removeTask = (id: number | undefined) => {
    this._toDoDataService.deleteProject(id).subscribe((data) => {
      if (data) {
        this.getTask();
      } else {
        alert('Not success');
      }
    });
  };

  submit: string = 'submit';
  login: string = 'login';
}
