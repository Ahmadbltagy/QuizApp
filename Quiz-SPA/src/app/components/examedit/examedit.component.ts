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
  constructor(
    private _subjectservice: SubjectService,
    private _activatedroute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.subjectId = this._activatedroute.snapshot.paramMap.get('id');
    this._subjectservice.byId(this.subjectId).subscribe((res) => {
      this.subject = res;
    });
  }

  questionForm = new FormGroup({
    questionText: new FormControl(''),
    questionInput: new FormControl(''),
  });
}
