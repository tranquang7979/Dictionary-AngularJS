import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name: 'Steven', age: 35},
    {name: 'Bill Gate', age: 70},
    {name: 'Warren Buffet', age: 80}
  ];

  constructor() { }

  ngOnInit() {
  }

  removePersonByName(name:string){
    const index = this.arrPeople.findIndex(e=>e.name === name);
    this.arrPeople.splice(index, 1);
  }

}
