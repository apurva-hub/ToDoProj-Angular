import { Injectable } from '@angular/core';
import { ToDo } from 'src/Model/ToDo';

@Injectable({
  providedIn: 'root',
})
export class ToDoDataService {
  a(): string {
    return 'Added successfully';
  }

  taskData?: ToDo[];
  getAllTask() {
    return this.taskData;
  }

  constructor() {
    this.taskData = [
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
}
