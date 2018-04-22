import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  arrFilter = [
    { text: 'View all', value: 0 },
    { text: 'Memorized', value: 1 },
    { text: 'Not Memorized', value: 2 }
  ];
  filter = this.arrFilter[0].value;
  searchResult = this.arrWords;
  langEN = "";
  langVN = "";
  maxId = 6;
  isShowForm = false;

  constructor() { }

  ngOnInit() {
  }

  getStyle(word) {
    let currentStyle = {
      //fontWeight: word.id % 2 === 0 ? 'bold' : 'normal', 
      fontWeight: 'bold',
      color: word.memorized ? 'green' : 'red'
    };
    return currentStyle;
  }

  addLanguage() {
    if (this.isShowForm) {
      this.maxId++;
      this.arrWords.unshift({
        id: this.maxId,
        en: this.langEN,
        vn: this.langVN,
        memorized: true
      });
      this.langEN = "";
      this.langVN = "";
    }
    this.isShowForm = !this.isShowForm;
  }

  delLanguage(w) {
    //this.arrWords.splice(this.arrWords.indexOf(w), 1);
    const index = this.arrWords.findIndex(word => word.id = w.id);
    this.arrWords.splice(index, 1);
  }

  filterChange() {
    if (this.filter.toString() === '0') {
      this.searchResult = this.arrWords;
    }
    else {
      this.searchResult = this.arrWords.filter(word => word.memorized == (this.filter == 1));
    }
  }

  changeStatus(w) {
    const index = this.arrWords.indexOf(w);
    console.log(index);
    if (index && index > -1)
      this.arrWords[index].memorized = !this.arrWords[index].memorized;
    this.filterChange();
  }

}
