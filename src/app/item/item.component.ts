import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <div class ="todo-item">
  <div class="todo-title" >
  <input type="checkbox" class="todo-checkbox" (click)="completeItem()"/>
  <div class="title"  [ngClass]="{'todo-complete': isComplete}">{{ todoItem.title }}</div>
    <div class="buttons">
     <button class="btn btn-red" (click)="removeItem()">Remove</button>
     <button class="btn btn-blue" (click)="editClicked=true">Edit</button>
     </div>
   </div>
  </div>
    <div *ngIf="editClicked">
    <todo-input (submit)="editItem(todoItem, $event); editClicked=false"></todo-input>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Input() todoItem;
  editClicked = false;
  isComplete = false;
  newTitle;

  constructor() { }

  ngOnInit() {
  }


  editItem(item, changes) {
    this.edit.emit({item, changes});
}

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  }

}
