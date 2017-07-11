import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

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

  getQuestions() {
    return this.questions;
  }

  addQuestion(question: Question){
    this.questions.unshift(question);
  }

}
