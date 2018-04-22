import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name = '';
  h3Color = '';
  divClass = '';
  isHighlight = false;
  evenStyle = { color: 'red', fontSize: '50px' };
  oddStyle = { color: 'black', fontSize: '20px' };
  currentClass = { circle: !this.isHighlight, square: this.isHighlight };

  isShow = true;
  arrSubjects = ["AngularJS", "ReactNative", "NodeJS"];

  constructor() { }

  ngOnInit() {
  }

  showEvent(e) {
    this.name = e.target.value;
    this.h3Color = this.name.length % 2 === 0 ? 'red' : 'black';
    this.divClass = this.name.length % 2 === 0 ? 'circle' : 'square';
    this.isHighlight = this.name.length % 2 === 0;
    this.currentClass = { circle: !this.isHighlight, square: this.isHighlight };
  }

}
