import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjectpage',
  templateUrl: './subjectpage.component.html',
  styleUrls: ['./subjectpage.component.css'],
})
export class SubjectpageComponent implements OnInit {
  subjects: any;
  constructor(private _subjectService: SubjectService) {}
  ngOnInit() {
    this._subjectService.all.subscribe({
      next: (res) => (this.subjects = res),
      error: (err) => console.log(err),
    });
  }
}
