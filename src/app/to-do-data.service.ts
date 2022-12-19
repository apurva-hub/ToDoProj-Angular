import { Injectable } from '@angular/core';
import { ToDo } from 'src/Model/ToDo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToDoData } from 'src/Model/ToDoData';

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

  getTaskData() {
    //gets all the data from todo array
    return this.http.get<ToDoData[]>(
      `https://localhost:7219/Project/${sessionStorage.getItem('userId')}`
    );
  }

  addTask(taskName: string, taskDescription: string) {
    return this.http.post(
      `https://localhost:7219/Project?ProjectTitle=${taskName}&ProjectDesc=${taskDescription}&currentUserId=${sessionStorage.getItem(
        'userId'
      )}`,
      {}
    );
  }

  deleteProject = (projectId: number | undefined) => {
    return this.http.delete(
      `https://localhost:7219/Project?projectId=${projectId}`
    );
  };

  constructor(private http: HttpClient) {}
}
