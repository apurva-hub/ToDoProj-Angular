import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input()
  toggleStatus: (() => void) | any;
  toggle = () => {
    this.toggleStatus();
  };

  @Input()
  error: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
