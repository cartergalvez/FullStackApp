import { Injectable } from '@angular/core';
import { BTW } from '../interfaces/btw';

@Injectable({
  providedIn: 'root'
})
export class BtwDataService {
  Questions: BTW [] = [
    {
      img:"",
    questions: "q1",
    a1:"a1",
    a2: "aa2",
    a3: "aaa3",
    a4: "aaaa4",
    correct: "C",
    }
  ]
  constructor() { }

  getQuestions(): BTW[]{
    return this.Questions;
  }
}
