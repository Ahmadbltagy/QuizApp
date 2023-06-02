import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})

export class ExamComponent implements OnInit {
  examId: number = 2
  exam: any
  questions: any
  questionIndex: number = 0
  studentAnswers: any = new Map<number, [number,boolean]>()
  answersIsSelected: boolean [] = []

  // Color Values [0 Not Viewed, 1 In Progress, 2 Answered, 3 Not Answered]
  questionsColors: number [] = []

  constructor(
    private service: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.service.GetExam(this.examId).subscribe({
      next: (response) => {
        this.exam = response;
        this.questions = this.exam.questions;
        this.questionsColors = this.questions.map((element: any) => 0);
        this.resetAnswersList()
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  resetAnswersList(){
    this.answersIsSelected = this.questions[this.questionIndex].options.map((element: any) => false)
  }

  nextQuestion() {
    if (this.questionIndex != this.questions.length - 1) {
      this.setColors(true)
      this.questionIndex++
      this.setColors(false)
      this.setSelectedAnswer()
    }
  }

  previousQuestion() {
    if (this.questionIndex != 0) {
      this.setColors(true)
      this.questionIndex--
      this.setColors(false)
      this.setSelectedAnswer()
    }
  }

  selectAnswer(answerIndex: number) {

    this.resetAnswersList()
    this.questionsColors[this.questionIndex] = 2
    this.answersIsSelected[answerIndex] = true

    let answer: boolean =
      this.questions[this.questionIndex].options[answerIndex][1];

    this.studentAnswers.set(this.questionIndex, [answerIndex,answer]);

  }

  setSelectedAnswer(){
    this.resetAnswersList()
    if(this.studentAnswers.has(this.questionIndex)){
      let answerIndex = this.studentAnswers.get(this.questionIndex)[0]
      this.answersIsSelected[answerIndex] = true
    }
  }

  selectedQuestion(i:number){
    this.setColors(true)
    this.questionIndex = i
    this.setSelectedAnswer()
    this.setColors(false)
  }

  /*  state = false which means i leaves from question
      state = true which means i enter the question    */
  setColors(state: boolean){
    if(state){
      if(this.questionsColors[this.questionIndex] != 2){
        this.questionsColors[this.questionIndex] = 3;
      }
    }
    else{
      if(this.questionsColors[this.questionIndex] != 2){
        this.questionsColors[this.questionIndex] = 1;
      }
    }
  }

}
