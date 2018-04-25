import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
    { id: 1, name: 'Steven', phoneNumber: '0123' },
    { id: 2, name: 'Bill Gates', phoneNumber: '0456' },
    { id: 3, name: 'Warren Buffet', phoneNumber: '0789' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
