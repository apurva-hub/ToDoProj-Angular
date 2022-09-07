import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/Model/ToDo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'ToDo List';

  constructor() {}

  ngOnInit(): void {}
}
