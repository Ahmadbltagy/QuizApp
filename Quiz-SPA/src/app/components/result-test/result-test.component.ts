import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-result-test',
  templateUrl: './result-test.component.html',
  styleUrls: ['./result-test.component.css']
})
export class ResultTestComponent implements OnInit {

  estimate:string= "";
  subject:any;
  subjectId:any;
  grade:any;
  studentName=localStorage.getItem('name');

  constructor(private _activatedRoute:ActivatedRoute, private _service:SubjectService) {
    
  }
  ngOnInit(): void {
    this.subjectId=this._activatedRoute.snapshot.paramMap.get('subjectId');
    this.grade=this._activatedRoute.snapshot.paramMap.get('grade');
    this._service.byId(this.subjectId).subscribe({
      next:(res)=>{
        this.subject=res;
      }
    });
    this.setEstimate();
  }

  setEstimate() {

    let gradeValue=parseInt(this.grade);

    if (gradeValue > 85) {
      this.estimate = "Excellent";
    } else if (gradeValue > 75) {
      this.estimate = "Very Good";
    } else if (gradeValue > 65) {
      this.estimate = "Good";
    } else if (gradeValue >= 50) {
      this.estimate = "Fair";
    } else {
      this.estimate = "Fail";
    }
  }
}
