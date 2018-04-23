import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() childClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  addForParent(){
    this.childClick.emit(true);
  }

  subForParent(){
    this.childClick.emit(false);
  }
}
