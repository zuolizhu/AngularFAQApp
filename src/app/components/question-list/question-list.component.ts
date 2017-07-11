import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:Object[];

  constructor() {
    this.questions = [
      {
        text: 'What is your favorite car brand ?',
        answer: 'Mercedes-Benz',
        hide: true
      },
      {
        text: 'Where do you live ?',
        answer: 'New York',
        hide: true
      },
      {
        text: 'Where do you study ?',
        answer: 'SUNY Albany',
        hide: true
      }
    ];
  }

  ngOnInit() {
  }

}
