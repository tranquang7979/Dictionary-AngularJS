import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  value = 0;
  @ViewChild(ChildComponent)
  myChild: ChildComponent;

  constructor() { }

  ngOnInit() {
  }

  changeValue(isAdd: boolean){
    if(isAdd)
      this.value = this.value + 1;
    else
      this.value = this.value - 1;
  }

  onAddForChild(){
    this.myChild.value++;
  }
}
