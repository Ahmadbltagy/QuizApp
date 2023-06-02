import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-examedit',
  templateUrl: './examedit.component.html',
  styleUrls: ['./examedit.component.css'],
})
export class ExameditComponent implements OnInit {
  subject: any;
  subjectId: any;
  newQuestion: {
    text: string;
    options: any;
    answer: string;
  } = { text: '', options: [], answer: '' };

  questionForm = new FormGroup({
    questionText: new FormControl(''),
    questionInput: new FormControl(''),
  });
  constructor(
    private _subjectservice: SubjectService,
    private _activatedroute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.subjectId = this._activatedroute.snapshot.paramMap.get('id');
    this._subjectservice.byId(this.subjectId).subscribe({
      next: (res) => (this.subject = res),
    });
  }
  //subject[id-1].questions[id-1].options
  EditQuestoin(e: any) {
    for (let i = 1; i < e.target.length - 1; i++) {
      this.newQuestion.options.push(e.target[i].value);
    }
    this.newQuestion.text = e.target[0].value;
    console.log(this.newQuestion);
    // this._subjectservice.editByid(this.subjectId, this.newQuestion).subscribe();
    // this.newQuestion = { text: '', options: [], answer: '' };
  }
}
