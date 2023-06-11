import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-examedit',
  templateUrl: './examedit.component.html',
  styleUrls: ['./examedit.component.css'],
})

export class ExameditComponent implements OnInit {
  subject: any = {name:'',questions:[]}
  subjectId: any
  newQuestion: {
    text: string
    options: [string,boolean][]
  } = { text: '', options: []}



  questionForm = new FormGroup({
    questionText: new FormControl(''),
    questionInput: new FormControl(''),
  });

  constructor(
    private _subjectservice: SubjectService,
    private _activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subjectId = this._activatedroute.snapshot.paramMap.get('id');
    if(this.subjectId != 0){
      this._subjectservice.byId(this.subjectId).subscribe({
        next: (res) => {
          this.subject = res
          console.log(this.subject)
        },
      });
    }
  }

  resetOptions(questionIndex: number){
    if(questionIndex!=-1){
      for(let i=0;i<this.subject.questions[questionIndex].options.length;i++){
        this.subject.questions[questionIndex].options[i][1] = false
      }
    }
    else{
      for(let i=0;i<this.newQuestion.options.length;i++){
        this.newQuestion.options[i][1] = false
      }
    }
  }

  changOption(questionIndex: number,optionIndex: number){
    this.resetOptions(questionIndex)
    if(questionIndex!=-1){
      this.subject.questions[questionIndex].options[optionIndex][1] = true
      console.log(this.subject)
    }
    else{
      this.newQuestion.options[optionIndex][1] = true
    }
  }

  changeOptionText(questionIndex: number,optionIndex: number, e:Event){
    let input = e.target as HTMLInputElement
    if(questionIndex!=-1){
      this.subject.questions[questionIndex].options[optionIndex][0] = input.value
    }else{
      this.newQuestion.options[optionIndex][0] = input.value
      console.log(this.newQuestion)
    }
  }

  editSubject(){
    this._subjectservice.updateSubject(this.subjectId, this.subject).subscribe({
        next: response => Swal.fire(
                            'Good job!',
                            `You Edit ${this.subject?.name} Subject`,
                            'success'
                          ),
      }
    )
  }

  addSubject(){
    this._subjectservice.addSubject(this.subject).subscribe({
      next: response => Swal.fire(
                          'Good job!',
                          `You Add ${this.subject?.name} Subject`,
                          'success'
                        ).then((result) => {
                          this.router.navigate([`/admin`])
                        }),
    })
  }

  deleteQuestion(questionIndex:number){
    this.subject.questions.splice(questionIndex,1)
  }

  setNewQuestionOptions(optionsNumber:number){
    while(this.newQuestion.options.length!=0){
      this.newQuestion.options.pop()
    }

    for(let i=0;i<optionsNumber;i++){
      this.newQuestion.options.push(['',false])
    }
  }

  click(){
    console.log(this.newQuestion)
    this.subject.questions.push(this.newQuestion)
    this.newQuestion = { text: '', options: []}
  }
}
