import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  subjects:any;
  
  constructor(private _subjectservice:SubjectService) {}

  ngOnInit(): void {
    this._subjectservice.all.subscribe({
      next: (res) => (this.subjects = res),
      error: (err) => console.log(err),
    });
 }

}
