import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from 'src/Model/ToDo';
import { ToDoDataService } from '../to-do-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Create your own ToDo list...';
  //stores the ngModel values in this
  taskName: string = '';
  taskDescription: string = '';

  count: number = 3;
  @Input() getTask: (() => void) | any;

  constructor(
    private _toDoDataService: ToDoDataService,
    private router: Router
  ) {}

  logout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('isFirstTime');

    this.router.navigate(['']);
  };

  ngOnInit(): void {}
  addTask = () => {
    if (this.taskName == '') {
      alert('Enter the task');
    } else {
      this._toDoDataService
        .addTask(this.taskName, this.taskDescription)
        //captues the count
        .subscribe((v) => {
          if (v >= 1) {
            this.getTask();
          } else {
            alert('Not added');
          }
        });
    }
    /*
    this._toDoDataService.taskData?.push({
      TaskName: this.taskName,
      TaskDescription: this.taskDescription,
    });*/
    this.taskName = '';
    this.taskDescription = '';
  };
}
