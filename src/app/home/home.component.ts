import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/Model/ToDo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  toDo?: ToDo[];
  taskName: string = '';
  taskDescription: string = '';
  constructor() {
    this.toDo = [
      {
        TaskName: 'Workout',
        TaskDescription: 'Early morning at 6',
      },
      {
        TaskName: 'Meeting',
        TaskDescription: 'Managers connect',
      },
      {
        TaskName: 'Breakfast',
        TaskDescription: 'Eattttt',
      },
    ];
  }

  ngOnInit(): void {}
  addTask = () => {
    this.toDo?.push({
      TaskName: this.taskName,
      TaskDescription: this.taskDescription,
    });
    this.taskName = '';
    this.taskDescription = '';
    alert('Added successfully');
  };
  removeTask = (id: number) => {
    this.toDo?.splice(id, 1);
  };
}
