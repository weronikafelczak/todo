import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  {{ todoItem.title }}
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: string;

  constructor() { }

  ngOnInit() {
  }

}